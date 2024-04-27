import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingState, setLoadingState] = useState(true);
  const provider = new GoogleAuthProvider();
  const fProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoadingState(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const signInWithGithub = () => {
    return signInWithPopup(auth, fProvider);
  };

  const logIn = (email, password) => {
    setLoadingState(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoadingState(true);
    return signOut(auth);
  };

  const authInfo = {
    createUser,
    user,
    logOut,
    logIn,
    loadingState,
    signInWithGoogle,
    signInWithGithub,
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoadingState(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
