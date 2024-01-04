import { Navigate, Outlet } from "react-router";
import * as React from "react";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, SetisLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 flex-col h-screen items-center justify-center">
			<Outlet/>
          </section>
          <img
            src="/assets/images/um6pSignin.png"
            alt="sign-inImg"
            className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
