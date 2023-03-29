// should be tsx file not ts file
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BinData from "../pages/BinData";
import DragNDrop from "../pages/DragNDrop";
import FormEvent from "../pages/FormEvent";
import TabIndex from "../pages/TabIndex";

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
      {
        path: "tab-index",
        element: <TabIndex />,
      },
      {
        path: "form-event",
        element: <FormEvent />,
      },
      {
        path: "bin-data",
        element: <BinData />,
      },
    ],
  },
]);
export default router;
