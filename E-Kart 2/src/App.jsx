import React from 'react'
import Login from './Login'
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import SignUp from './SignUp';
import Navbar from './Navbar';
import Home from './Home';
import AddtoCart from './AddtoCart';



function App() {
   
  const router = createBrowserRouter([
    {path: "/",element: <Login /> },
    {path: "/signup",element: <SignUp /> },
    {path: "/navbar", element: <Navbar />},
    {path: "/home", element: <Home />},
    {path: "/addtocart", element: <AddtoCart />}
  ]);


  return (
     <div>
     <RouterProvider router = {router} />
     </div>
  )
}

export default App
