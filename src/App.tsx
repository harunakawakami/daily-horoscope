import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import DailyHoroscopeResult, {
  loader as getDailyHoroscopeLoader,
} from "./components/pages/DailyHoroscopeResult";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="daily/:sign"
        element={<DailyHoroscopeResult />}
        loader={getDailyHoroscopeLoader}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// fallbackElement={<BigSpinner />}

export default App;
