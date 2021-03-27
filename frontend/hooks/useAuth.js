import { createContext, useContext, useState, useEffect } from "react"
import { auth, db } from "../configurations/db.js"

const authContext = createContext(null)
const { Provider } = authContext

export function AuthProvider(props) {
    const auth = useAuthProvider()
    return <Provider value={auth}>{props.children}</Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

const useAuthProvider = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(handleAuthState)
        return () => unsub()
    }, [])

    useEffect(() => {
        if (user?.uid) {
            const unsubscribed = db.collection("users").doc(user.uid).onSnapshot(doc => setUser(doc.data()))
            return () => unsubscribed()
        }
    }, [])

    const addUserToFirestore = user => {
        return db.collection("users").doc(user.uid).set(user).then(() => {
            console.log("bam")
            setUser(user)
            return user
        }).catch(error => {
            console.log(error)
        })
    }

    const fetchUserDataFromFirestore = user => {
        return db.collection("users").doc(user.uid).get().then(res => {
            if (res.data()) {
                setUser(res.data())
                console.log("bam2")
            }
        })
    }

    const handleAuthState = user => {
        setUser(user)
        if (user) {
            fetchUserDataFromFirestore(user)
        }
    }

    const signup = (email, password, username) => {
        return auth.createUserWithEmailAndPassword(email, password).then(res => {
            console.log(res)
            return addUserToFirestore({ uid: res.user.uid, email, password, username })
        }).catch(error => {
            console.log(error)
        })
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password).then(res => {
            setUser(res.user)
            fetchUserDataFromFirestore(user)
            console.log(res)
            return res.user
        }).catch(error => {
            console.log(error)
        })
    }

    const signout = () => {
        console.log("bam3")
        return auth.signOut().then(() => setUser(false))
    }

    return { user, signup, signin, signout }
}