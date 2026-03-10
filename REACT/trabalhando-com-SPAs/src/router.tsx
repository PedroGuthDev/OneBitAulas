import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/Admin";
import RootLayout from "./Component/RootLayout";
import Product from "./pages/Product";
import loadProduct from "./loaders/products.ts";
import ProductBoundarie from "./error-boundaries/ProductBoundarie.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
        loader: loadProduct,
        ErrorBoundary: ProductBoundarie
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },
]);

export default router;
