import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About.jsx'
import ContactUs from './components/ContactUs.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <App />
  },
  {
    path: '/contactus',
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>

)
