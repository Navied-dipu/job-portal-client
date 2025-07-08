import React, { useEffect, useState } from 'react'
import AuthContext from './AuthContext'
import auth from '../../firebase/firebase.init'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default function AuthProvider({children}) {

    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)

    const createUser =(email, password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser =(email, password) =>{
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser =()=>{
        setLoading(false)
        return signOut(auth)
    }

    useEffect(()=>{
       const unSubcribe= onAuthStateChanged(auth, currentUser =>{
        console.log('state capture ' , currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{ 
            unSubcribe() 
        }
    },[])

    const AuthInfo ={
        user,
        loading, 
        createUser,
        signInUser,
        signOutUser,
    }

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}
