import React, { useEffect } from 'react'
import { createContext } from "react"
import app from "../firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true)

  //create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //create user using gmail
  const signUpWithGmail = () =>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

  //login
  const login =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  //logout
  const logOut=()=>{
    return signOut(Auth)
  }

  //user is available or not
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
      setLoading(false);
    })
    return ()=>{
      return unsubscribe()
    }
  })

  const authInfo = {
    user,
    loading,
    createUser,
    signUpWithGmail,
    login,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider