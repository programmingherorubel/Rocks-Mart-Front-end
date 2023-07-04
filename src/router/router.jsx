import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import CheckOut from "../Components/CheckOut";
import Home from "../Components/Home";
import Main from "../Components/Main";
import NotFound from "../Components/NotFound";
import ProductDetail from "../Components/ProductDetail";
import Shop from "../Components/Shop";
import AddBlogs from "../Dashbord/AddBlogs";
import AddProducts from "../Dashbord/AddProducts";
import AllOrder from "../Dashbord/AllOrder";
import Dashbord from "../Dashbord/Dashbord";
import MyProduct from "../Dashbord/MyProduct";
import MyProductsInformation from "../Dashbord/MyProductsInformation";
import WebUser from "../Dashbord/WebUser";
import AboutUs from '../Pages/AboutUs';
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Reg from "../Pages/Reg";
import SingleCategory from "../Pages/SingleCategory";
import Wishlist from "../Pages/Wishlist";
import Admin from "./Admin";
import RequiredRoute from "./RequiredRoute";


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
                    element:<RequiredRoute><Shop/></RequiredRoute>
                },
                {
                    path:'/about',
                    element:<AboutUs/>
                },
                {
                    path:'/cart',
                    element:<RequiredRoute><Cart/></RequiredRoute>
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
                    element:<RequiredRoute><ProductDetail/></RequiredRoute>
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
                    element:<RequiredRoute><CheckOut/></RequiredRoute>
                },
                {
                    path:'/myproduct',
                    element:<MyProduct></MyProduct>
                },
                {
                    path:'/singleorder/:id',
                    element:<MyProductsInformation></MyProductsInformation>,
                    loader:({params})=>fetch(`https://best-server-five.vercel.app/paymentinformation/single/${params.id}`)
                },
            ]
        },
        {
            path:'/dashbord',
            element:<Admin><Dashbord /></Admin>,
            children:[
                {
                    path:'/dashbord/addproducts',
                    element:<AddProducts></AddProducts>
                },
                {
                    path:'/dashbord/addblogs',
                    element:<AddBlogs></AddBlogs>
                },
                {
                    path:'/dashbord/allorder',
                    element:<AllOrder></AllOrder>
                },
                {
                    path:'/dashbord/webuser',
                    element:<WebUser></WebUser>
                },
                
            ]
        }
    ]
)

export default router 