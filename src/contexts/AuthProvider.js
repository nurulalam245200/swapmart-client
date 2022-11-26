import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //login gate
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sigup or create
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log out or signOut
  const logout = () => {
    return signOut(auth);
  };

  //auth info
  const authInfo = { user, login, signUp, logout };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
