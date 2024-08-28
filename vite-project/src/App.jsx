import './App.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import AppLayout from './Components/AppLayout/AppLayout';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import AuthLayout from './Components/AuthLayout/AuthLayout';
import Home from './Pages/Home/Home';
import Videos from './Pages/Videos/Videos';
import Gallery from './Pages/Gallery/Gallery';
import Players from './Pages/Players/Players';
import Club from './Pages/Club/Club';
import Help from './Pages/Help/Help';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/videos",
        element: <Videos/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
      {
        path: "/players",
        element: <Players/>
      },
      {
        path: "/club",
        element: <Club/>
      },
      {
        path: "/help",
        element: <Help/>
      },
      
    ]
    },
    {
      path: "/auth",
      element: <AuthLayout/>,
      children: [
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"signUp",
          element:<Signup/>
        }
      ]
        
    },

   
  
]);



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App


