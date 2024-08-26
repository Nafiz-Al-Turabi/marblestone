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
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PropertyManagement from "../Pages/PropertyManagement/PropertyManagement";
import NotFound from "../Pages/NotFound/NotFound";
import Owner from "../Pages/Owner/Owner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<NotFound></NotFound>,
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
            {
                path: 'propertyDetails',
                element: <PropertyDetails />
            },
            {
                path: 'propertyManagement',
                element: <PropertyManagement />
            },
            {
                path: 'contact',
                element: <ContactUs />
            },
            {
                path: 'owner',
                element: <Owner />
            },
        ]
    },
]);

export default router