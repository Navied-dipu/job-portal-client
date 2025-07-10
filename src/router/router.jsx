import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../loayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'jobs/:id',
          element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
          path:'signin',
          element:<SignIn></SignIn>
        }

    ]
  },
]);

export default router