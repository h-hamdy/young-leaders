import { Navigate, Outlet } from "react-router";
import * as React from "react";
import { useLocation } from "react-router-dom";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <section className="flex flex-1 flex-col h-screen items-center justify-center px-4 sm:px-0">
        <Outlet />
      </section>
      {location.pathname === "/sign-in" ? (
        <img
          src="/assets/images/um6pSignin.png"
          alt="sign-inImg"
          className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      ) : (
        <img
          src="/assets/images/um6pSignup.png"
          alt="sign-inImg"
          className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
        />
      )}
    </>
  );
};

export default AuthLayout;
