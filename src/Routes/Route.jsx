import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Blogs from "../Pages/Blogs/Blogs";
import Agents from "../Pages/Agents/Agents";
import AgentDetails from "../Pages/AgentDetails/AgentDetails";
import Properties from "../Pages/Properties/Properties";
import LocationCMS from "../Pages/LocationCMS/LocationCMS";
import PropertyCMS from "../Pages/PropertyCMS/PropertyCMS";
import CmsSales from "../Pages/CmsSales/CmsSales";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch('blogdata.json')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/agents',
                element: <Agents></Agents>
            },
            {
                path: '/agentDetails/:id',
                element: <AgentDetails></AgentDetails>,
                loader: ({ params }) => fetch('agents.json')
            },
            {
                path: '/properties',
                element: <Properties></Properties>
            },
            {
                path: 'propertyLocation',
                element: <LocationCMS></LocationCMS>
            },
            {
                path: 'propertycms',
                element: <PropertyCMS />
            },
            {
                path: 'cmsSales',
                element: <CmsSales />
            },
        ]
    },
]);

export default router