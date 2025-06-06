import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import LoginPage from "./LoginPage";

import { RouterProvider } from "react-router-dom";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>,
        },
        {
            path:"/login",
            element: <LoginPage/>,
        },
    ]);


    return (
    <div>
        <RouterProvider  router={appRouter}/>
        {/* // <Login/>
        // <Browse/> */}
    </div>
);
}

export default Body;