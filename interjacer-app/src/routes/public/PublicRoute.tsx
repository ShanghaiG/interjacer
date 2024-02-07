import { Route, Routes } from "react-router-dom";
import { LandingPage } from "src/pages/Landing";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />}></Route>
    </Routes>
  );
};
