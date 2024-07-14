import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import CreatePost, { createPostAction,  } from "./components/Createpost.jsx";
import App from "./routes/App.jsx";
import PostList, { postLoader } from "./components/Postlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader:postLoader},
      { path: "/create-post", element: <CreatePost /> ,action:createPostAction },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
