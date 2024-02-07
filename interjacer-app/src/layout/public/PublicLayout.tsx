import { Footer, Navbar } from "src/components";
import { PublicRoute } from "src/routes/public/PublicRoute";

export const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Navbar />
      <div className="mt-16">
        <PublicRoute />
      </div>
      <Footer />
    </div>
  );
};
