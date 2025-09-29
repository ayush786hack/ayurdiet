// src/pages/Callback.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// src/{supabaseClient.js
import {supabase} from "../supabaseClient";


const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogin = async () => {
      // Supabase automatically stores session after redirect
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) return alert("Error fetching session: " + error.message);

      if (session?.user) {
        
      
        navigate("/"); // redirect to home page
      } else {
        alert("No session found");
      }
    };

    handleLogin();
  }, [navigate]);

  return <h2>Logging you in...</h2>;
};

export default Callback;
