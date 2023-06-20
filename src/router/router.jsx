import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Components/Home";
import Dashbord from "../Dashbord/Dashbord";
import AddProducts from "../Dashbord/AddProducts";
import SingleCategory from "../Pages/SingleCategory";
import Shop from "../Components/Shop";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<Main/>,
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