import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from "../layouts/MAin";
import Home from "../pages/Home/Home/Home";
import Catagory from "../pages/Home/Catagory/Catagory";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import TermsConditions from "../pages/Shared/TermsConditions/TermsConditions";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <TermsConditions></TermsConditions>
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      {
        path: ':id',
        element: <Catagory></Catagory>,
        loader: ({ params }) => fetch(`https://the-news-deagon-server-mohonsaha.vercel.app/categories/${params.id}`)
      }
    ]
  },
  {
    path: 'news',
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({ params }) => fetch(`https://the-news-deagon-server-mohonsaha.vercel.app/news/${params.id}`)
      }
    ]
  }
]);

export default router;