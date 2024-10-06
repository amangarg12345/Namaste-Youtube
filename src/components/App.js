import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../components/header/Header.js"
import Body from "./body/Body.js";
import HomeBody from "./body/HomeBody.js";
import WatchPage from "./WatchPage.js";
import { Provider } from "react-redux";
import store from "../utils/store.js";
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <HomeBody />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
const App = () =>{
    return(
        <Provider store={store}>
    <div>
        <Header/>
        <RouterProvider router={appRouter} />
    </div>
    </Provider>
    )
}
export default App;