import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/serviceDetails/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/signup',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

export default router;