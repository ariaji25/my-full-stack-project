"use client";

import firebaseService from "@mynextapp/services/firebase";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<string | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = firebaseService.getApp().auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={token}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
