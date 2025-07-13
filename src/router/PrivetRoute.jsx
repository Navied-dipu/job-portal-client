import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivetRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
    const locaton=useLocation()
    // console.log(locaton)
  if (loading) {
    return <span className="loading loading-ball loading-xs"></span>;
  }

  if (user) {
    return children;
  }
  return <Navigate state={locaton?.pathname} to={"/signin"}></Navigate>;
}
