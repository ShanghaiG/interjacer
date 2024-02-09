import { Route, Routes } from "react-router-dom";
import { LandingPage } from "src/pages/Landing";
import { PageNotFound } from "src/pages/PageNotFound/PageNotFound";

export const PublicRoute = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};
