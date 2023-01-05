import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import DailyHoroscopeResult from "./components/pages/DailyHoroscopeResult";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPage />}>
      <Route path="daily-horoscope/:sign" element={<DailyHoroscopeResult />} />
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
