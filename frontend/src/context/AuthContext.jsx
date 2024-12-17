import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

//authProvider

export const AuthProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // manage user
  useEffect(() => {
    const token = localStorage.getItem("token");
    setCurrUser(token);
  }, []);
  const value = {
    currUser,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
