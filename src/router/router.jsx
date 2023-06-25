import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import Dashbord from "../Dashbord/Dashbord";
import AddProducts from "../Dashbord/AddProducts";
import SingleCategory from "../Pages/SingleCategory";
import Shop from "../Components/Shop";
import AboutUs from "../Pages/AboutUs";
import NotFound from "../Components/NotFound";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import Cart from "../Components/Cart";
import ProductDetail from "../Components/ProductDetail";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>,
            errorElement:<NotFound/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/shop',
                    element:<Shop/>
                },
                {
                    path:'/about',
                    element:<AboutUs/>
                },
                {
                    path:'/cart',
                    element:<Cart/>
                },
                {
                    path:'/single/:id',
                    element:<ProductDetail/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/registration',
                    element:<Reg/>
                },
                {
                    path:'/category/:title',
                    element:<SingleCategory/>
                }
            ]
        },
        {
            path:'/dashbord',
            element:<Dashbord></Dashbord>,
            children:[
                {
                    path:'/dashbord/addproducts',
                    element:<AddProducts></AddProducts>
                }
            ]
        }
    ]
)

export default router 