import React from 'react';
import './App.css';
import Home from './pages/Home';
import LogInPage from './pages/LogInPage';
import SignupPage from './pages/SignupPage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
]);


function App() {
  return (
    <div className="App">
  
  <RouterProvider router={router} />
    </div>
  );
}

export default App;
