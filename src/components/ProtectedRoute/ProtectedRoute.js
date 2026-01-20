import { useContext, useEffect } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
function ProtectedRoute({ children, msg, redirect }) {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);
  return children;
}

export default ProtectedRoute;
