import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import BlogDetails from "../Components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blogDetails/:id',
                element:<BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch('blogdata.json')
            }
        ]
    },
]);

export default router