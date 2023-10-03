import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Hero from './components/Hero.jsx';
import PropertyPage from './components/PropertyPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      
      <Route index element={<Hero/>}/>  
      <Route path='/:city' element={<Hero/>}/>  
      <Route path='/:city/:id' element={<PropertyPage/>}/>  
      {/* passes city name to hero to render conditionally  */}

    </Route>

  )
  
  
  );
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  