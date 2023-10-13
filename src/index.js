import React, { lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header.js";
import Body from "./components/Body";
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

// import Grocery from './components/Grocery';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';


// import App from './App';
// import reportWebVitals from './reportWebVitals';
 
const Grocery = lazy(() => import('./components/Grocery'));

const Applayout = () =>{
  return(
    <div className='app'>
      <Header/>
      <Outlet/>
      
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout/>,
    children:[{
      path: "/",
    element: <Body/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/grocery",
      element: <Suspense fallback = {<h1>loading...</h1>} ><Grocery/></Suspense>
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />
    },
    
  ],

    errorElement:<Error/>,
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
