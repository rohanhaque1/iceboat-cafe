import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Homepage from "../layout/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
