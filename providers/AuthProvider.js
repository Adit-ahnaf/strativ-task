"use client";

import { authContext } from "@/context";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({});

  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
