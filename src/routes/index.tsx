// should be tsx file not ts file
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BinData from "../pages/BinData";
import DragNDrop from "../pages/DragNDrop";
import Editor from "../pages/Editor";
import FormEvent from "../pages/FormEvent";
import ChatRoom from "../pages/ReactConcepts/ChatRoom";
import RefTime from "../pages/ReactConcepts/RefTime";
import TabIndex from "../pages/TabIndex";
import Flex from "../pages/flex";
import Grid from "../pages/grid";
import Float from "../pages/float";
import TwoColumn from "../pages/2column";

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
      {
        path: "editor",
        element: <Editor />,
      },
      {
        path: "concepts",
        element: <RefTime />,
      },
      {
        path: "chatroom",
        element: <ChatRoom />,
      },
      {
        path: "flex",
        element: <Flex />,
      },
      {
        path: "grid",
        element: <Grid />,
      },
      {
        path: "float",
        element: <Float />,
      },
      {
        path: "2column",
        element: <TwoColumn />,
      },
    ],
  },
]);
export default router;
