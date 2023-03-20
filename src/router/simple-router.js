import React from "react";

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";

// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";

//extrpages
import Maintenance from "../views/dashboard/extrapages/maintenance";
import ComingSoon from "../views/dashboard/extrapages/comingsoon";
import Register from "../views/dashboard/auth/register";
import Login from "../views/dashboard/auth/login";

export const SimpleRouter = [
  {
    path: "auth/confirm-mail",
    element: <ConfirmMail />,
  },
  {
    path: "auth/lock-screen",
    element: <LockScreen />,
  },
  {
    path: "auth/recoverpw",
    element: <Recoverpw />,
  },

  {
    path: "auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "auth/register",
    element: <Register />,
  },
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "errors/error404",
    element: <Error404 />,
  },
  {
    path: "errors/error500",
    element: <Error500 />,
  },
  {
    path: "extra-pages/pages-maintenance",
    element: <Maintenance />,
  },
  {
    path: "extra-pages/pages-comingsoon",
    element: <ComingSoon />,
  },
];
