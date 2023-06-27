import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Main from "../Components/Main";
import NotFound from "../Components/NotFound";
import ProductDetail from "../Components/ProductDetail";
import Shop from "../Components/Shop";
import AddBlogs from "../Dashbord/AddBlogs";
import AddProducts from "../Dashbord/AddProducts";
import Dashbord from "../Dashbord/Dashbord";
import AboutUs from '../Pages/AboutUs'
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import SingleCategory from "../Pages/SingleCategory";
import Wishlist from "../Pages/Wishlist";
import Contact from "../Pages/Contact";
import CheckOut from "../Components/CheckOut";


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
                    path:'/wishlist',
                    element:<Wishlist/>
                },
                {
                    path:'/category/:title',
                    element:<SingleCategory/>
                },
                {
                    path:'/contact',
                    element:<Contact/>
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
                    path:'/checkout',
                    element:<CheckOut/>
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
                },
                {
                    path:'/dashbord/addblogs',
                    element:<AddBlogs></AddBlogs>
                },
            ]
        }
    ]
)

export default router 