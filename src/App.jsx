import {
  HomeLayout,
  // Landing,
  Error,
  // About,
  ShareYourRecipe,
  // SingleCocktail,
} from "./pages";

import { ErrorElement } from "./components";
//loaders
// import { loader as landingLoader } from "./pages/Landing";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

//action
import { action } from "./pages/ShareYourRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Landing />,
      //   loader: landingLoader,
      //   errorElement: <ErrorElement />,
      // },
      {
        path: "ingredient",
        element: <ShareYourRecipe />,
        action: action,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
