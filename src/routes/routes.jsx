import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Services from "../screens/Services";
import NotFound from "../screens/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
       path: "*",
       element: <NotFound />,
     },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
