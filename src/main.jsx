import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import Home from "./home/Home"
import Blog from "./blog/Blog"
import Shop from "./shop/Shop"
import SpecificProduct from "./shop/SpecificProduct"
import CartPage from "./shop/CartPage"
import About from "./about/About"
import SpecificBlog from "./blog/SpecificBlog"
import Contact from "./contact/Contact"
import AuthProvider from "./contexts/AuthProvider"
import PrivateRoute from "./PrivateRoute/PrivateRoute"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';



const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog/:id",
                element: <SpecificBlog />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/shop/:id",
                element: <SpecificProduct />
            },
            {
                path: "/cart-page",
                element: <PrivateRoute><CartPage/></PrivateRoute>
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/sign-up",
        element:<Signup/>
    }
])

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={router}/>
    </AuthProvider>
)
