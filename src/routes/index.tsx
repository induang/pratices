// should be tsx file not ts file
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DragNDrop from "../pages/DragNDrop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // remember: should put a <Outlet /> in a element when it has property children
    children: [
      {
        path: "drag-drop",
        element: <DragNDrop />,
      },
    ],
  },
]);
export default router;
