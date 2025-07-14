// Layout.js
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Main content area with proper spacing */}
      <main className="pt-16 md:pt-20">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
