import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../views/partials/Root";
import Home from "../views/Home/Home";
import Loading from "../components/UI/Loading/Loading";

const Product = lazy(() => import("../views/Product/Product"));
const Products = lazy(() => import("../views/Products/Products"));
const Login = lazy(() => import("../views/Login/Login"));
const Register = lazy(() => import("../views/Register/Register"));
const MainCart = lazy(() => import("../views/MainCart/MainCart"));
const Checkout = lazy(() => import("../views/Checkout/Checkout"));
const NewProduct = lazy(() => import("../views/NewProduct"));
const NotFound = lazy(() => import("../views/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },

      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "new-product",
        element: (
          <Suspense>
            <NewProduct fallback={<Loading />} />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <MainCart />
          </Suspense>
        ),
      },
    ],
  },
]);
