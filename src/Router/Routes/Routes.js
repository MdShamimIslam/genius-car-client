import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Order from "../../Pages/Order/Order";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
       path:'/',
       element:<Main></Main>,
       children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/checkout/:id',
            element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: ({params})=> fetch(`https://genius-car-server-sooty-five.vercel.app/services/${params.id}`)
        },
        {
            path:'/orders',
            element:<PrivateRoute><Order></Order></PrivateRoute>
        }
       ]
    }
]);

export default router;