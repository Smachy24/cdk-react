// LogoutComponent.jsx
import React, { useEffect } from 'react';
import { getAuth, signOut } from "@firebase/auth";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      const auth = getAuth();
      await signOut(auth);
      navigate("/");
    }

    logout();
  }, [navigate]);

  // You can return some loading indicator or null here if needed
  return null;
}

export default Logout;
