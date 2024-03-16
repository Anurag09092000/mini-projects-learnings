import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenPage from "./Components/utils/MenPage";
import Layout from "./Components/utils/Layout";
import WomenPage from "./Components/utils/Women";
import Kids from "./Components/utils/Kids";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Cart from "./Components/utils/Cart";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "men",
        element: <MenPage />,
      },
      {
        path: "women",
        element: <WomenPage />,
      },
      {
        path: "kids",
        element: <Kids />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
