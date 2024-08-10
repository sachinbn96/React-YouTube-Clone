import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Feed, VideoDetail, SearchDetail, ChannelDetail } from "./components";

const router = createBrowserRouter([
  { path: "/", element: <Feed /> },
  { path: "/channel/:id", element: <ChannelDetail /> },
  { path: "/video/:id", element: <VideoDetail /> },
  { path: "/search/:searchTerm", element: <SearchDetail /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
