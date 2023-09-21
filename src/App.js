import React from 'react';
import './App.css';
import Home from './pages/Home';
import LogInPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';
import ProductDetailPage from './pages/ProductDetailPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from './pages/CartPage';
import CheckOut from './pages/CheckOut';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home/>),
  },
  {
    path: "/login",
    element: (<LogInPage/>)
  },
  {
    path: "/signup",
    element: (<SignupPage/>)
  },
  {
    path: "/cart",
    element: (<CartPage/>)
  },
  {
    path: "/checkout",
    element: (<CheckOut/>)
  },
  {
    path: "/product-details/:id",
    element: <ProductDetailPage/>
  },
]);


function App() {
  return (
    <div className="App">
  
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
