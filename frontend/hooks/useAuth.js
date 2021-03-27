import { createContext, useContext, useState } from "react"
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

    const addUserToFirestore = user => {
        return db.collection("users").doc(user.uid).set(user).then(() => {
            console.log("bam")
        }).catch(error => {
            console.log(error)
        })
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
            console.log(res)
            return user
        }).catch(error => {
            console.log(error)
        })
    }

    return { user, signup, signin }
}