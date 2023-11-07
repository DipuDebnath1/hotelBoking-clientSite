import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebasr.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)

    // Register 
    const Register = (email,password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }
    // Login 
    const Login = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // user observer 
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth,curretnUser=>{
            setUser(curretnUser)
            setLoading(false)
        })
        return unsubscribe
    },[])

    // Logout 
    const logOut = () =>{
        return signOut(auth)
    }
   

    const authInfo = {
        Register,
        Login,
        logOut,
        user,
        loading
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;