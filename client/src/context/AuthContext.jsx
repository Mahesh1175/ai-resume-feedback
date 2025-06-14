import React, { createContext, useEffect, useState } from "react";
import { auth, signInWithPopup, googleProvider } from "../firebase/firebase";
import {
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored);

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      // Keep Firebase token in sync but don't overwrite local user display
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Enhanced Google Sign-In to save user info and update context
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      const userData = {
        displayName: googleUser.displayName,
        email: googleUser.email,
        photoURL: googleUser.photoURL,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error("Google Sign-in Error:", error.message);
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
    return firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
