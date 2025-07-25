import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
const googleProvider = new GoogleAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };
  const googleSignin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture ", currentUser);
      if (currentUser?.email) {
        const user = { email: currentUser?.email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            setLoading(false);
            console.log(res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) =>{ 
              setLoading(false);
              console.log("logout", res.data)});
      }
    });
    return () => {
      unSubcribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    googleSignin,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
}
