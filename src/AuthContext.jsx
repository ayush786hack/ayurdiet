// import { createContext, useContext, useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check initial session
//     supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session?.user || null);
//       setLoading(false);
//     });

//     // Listen to login/logout
//     const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user || null);
//       if (event === "SIGNED_IN") navigate("/new-patient");
//       if (event === "SIGNED_OUT") navigate("/");
//     });

//     return () => listener.subscription.unsubscribe();
//   }, [navigate]);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.getSession();
    session.then(({ data }) => {
      setUser(data?.session?.user ?? null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use the context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
