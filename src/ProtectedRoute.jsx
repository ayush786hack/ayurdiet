// // // src/ProtectedRoute.jsx
// // import { Navigate } from "react-router-dom";
// // import { useAuth } from "./AuthContext";

// // const ProtectedRoute = ({ children }) => {
// //   const { user, loading } = useAuth();

// //   if (loading) return <p>Loading...</p>;
  

// //   return children;
// // };

// // export default ProtectedRoute;
// // src/ProtectedRoute.jsx
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "./AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/register" replace />;

//   return children;
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/register" replace />;
  return children;
};

export default ProtectedRoute;
