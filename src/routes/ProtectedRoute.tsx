import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type { JSX } from "react";

function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const token = useSelector(
    (state: RootState) => state.auth.token
  );

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;