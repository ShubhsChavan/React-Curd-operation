import Home from "./components/pages/homepages/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Setting from "./components/pages/setting/Setting";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";

import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const router=createBrowserRouter([
    {
      path: "/", element: <TopBar/>,
      children:[
        { index: true, element: <Home /> },
        // { path: "contact", element: <Contact /> },
        //{ path: "about", element: <About /> },
        { path: "write", element: <Write/> }
      ]
    }
  ])
  
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
