import { createBrowserRouter} from "react-router-dom";
import Browse from "./Browse";
// import LoginPage from "./LoginPage";

import { RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";
import WithSignUp from "./WithSignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
        {
            path:"/login",
            element: <WithSignUp />,
            // Netflix Style
            // element: <LoginPage/>,

        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));

            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    }, [])

    return (
    <div>
        <RouterProvider  router={appRouter}/>
    </div>
);
}

export default Body;