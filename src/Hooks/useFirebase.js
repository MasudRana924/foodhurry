import { useEffect, useState } from 'react';
import initializeAuthentication from './../Pages/Firebase/firebase.ini';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged,signOut} from "firebase/auth";
initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading,setIsLoading]=useState(true)
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setIsLoading(true)
        return  signInWithPopup(auth, googleProvider)


    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
           
        })
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(()=>
                setIsLoading(false)
            )
    }
    return {
        user, googleSignIn,logOut,isLoading,setIsLoading
    }

}
export default useFirebase