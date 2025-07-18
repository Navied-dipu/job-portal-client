import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../loayout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJob from "../My Posted job/MyPostedJob";
import ViewApplication from "../pages/ViewApplication/ViewApplication";


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
          path:"jobApply/:id",
          element:<PrivetRoute><JobApply></JobApply></PrivetRoute>
        },
        {
          path:'myapplications',
          element:<PrivetRoute><MyApplications></MyApplications></PrivetRoute>,
        },
        {
          path:'add-jobs',
          element:<PrivetRoute><AddJobs></AddJobs></PrivetRoute>,
        },
        {
          path:'mypostedjob',
          element:<PrivetRoute><MyPostedJob></MyPostedJob></PrivetRoute>,
        },
        {
          path:'viewapplication/:job_id',
          element:<PrivetRoute><ViewApplication></ViewApplication></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
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