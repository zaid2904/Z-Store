// Header.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      dir="ltr"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-lg border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <Logo />
          </motion.div>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <Navigations />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* Search */}
            <div className="hidden md:block">
              <SearchAppBar />
            </div>
            
            {/* Search icon for mobile */}
            <div className="md:hidden">
              <button className="btn-ghost p-2 rounded-lg">
                <svg className="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Theme Switcher */}
            <div className="hidden sm:block">
              <ThemeSwitcher />
            </div>

            {/* Profile */}
            <Profile />

            {/* Mobile menu button */}
            <div className="lg:hidden ml-1">
              <button className="btn-ghost p-2 rounded-lg">
                <svg className="w-6 h-6 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
