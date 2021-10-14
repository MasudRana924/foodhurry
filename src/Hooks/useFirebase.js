import { useEffect, useState } from 'react';
import initializeAuthentication from './../Pages/Firebase/firebase.ini';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
   
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
      return  signInWithPopup(auth, googleProvider)
      
   
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    return {
        user,  googleSignIn, logOut
    }

}
export default useFirebase