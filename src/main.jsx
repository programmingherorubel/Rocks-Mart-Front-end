import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import AuthProvider from './AuthProvider/AuthProvider'
import './Style/Index.css'
import { store } from './app/store'
import router from './router/router'



ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <AuthProvider>
            <RouterProvider router={router}>
            
            </RouterProvider>
        </AuthProvider>
    </Provider >


)
