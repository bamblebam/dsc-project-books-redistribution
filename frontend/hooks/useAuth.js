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
    const [user, setUser] = useState(false)

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
            var user = res.user
            user
            .sendEmailVerification()
            .then(function () { })
            .catch(function (error) {
                console.log('Error occured')
            })
            return addUserToFirestore({ uid: res.user.uid, email, password, username })
        }).catch(error => {
            console.log(error)
        })
        user
        .sendEmailVerification()
        .then(function () { })
        .catch(function (error) {
            console.log('Error occured')
        })
    }

    const signin = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password).then(res => {
            setUser(res.user)
            fetchUserDataFromFirestore(user)
            return res.user
        }).catch(error => {
            console.log(error)
        })
    }

    const signout = () => {
        return auth.signOut().then(() => setUser(false))
    }

    const resetPassword = email => {
        return auth.sendPasswordResetEmail(email).then(res => {
            return res
        }).catch(error => {
            console.log(error)
        })
    }

    return { user, signup, signin, signout, resetPassword }
}