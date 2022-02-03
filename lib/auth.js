import React, { useState, useEffect, useContext, createContext } from 'react';
import {auth} from "./firebase";

import {  signInWithPopup, GithubAuthProvider,onAuthStateChanged,signOut as signOutFB } from "firebase/auth";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  console.log(user);

  const signinWithGithub = () => {

    return signInWithPopup(auth,new GithubAuthProvider())
      .then((response) => {
        //setUser(response.user);
        return response.user;
      });
  };

  const signOut = () => {
    return  signOutFB(auth)
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signOut
  };
}