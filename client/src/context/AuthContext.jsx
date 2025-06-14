import React, { createContext, useEffect, useState } from "react";
import { auth, signInWithPopup, googleProvider } from "../firebase/firebase"
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";


export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);

    const unsubscribe = onAuthStateChanged(auth, u => {
      // setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    return firebaseSignOut(auth);
  };
  return (
    <AuthContext.Provider value={{ user,setUser, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
