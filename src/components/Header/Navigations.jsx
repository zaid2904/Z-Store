import i18n from "../common/components/LangConfig";
import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Auth/firebase";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Navigations = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // Map routes to their corresponding labels
  const routes = [
    { path: "/", label: i18n.t("home") },
    { path: "/allProducts", label: i18n.t("allProducts.redTitle") },
    { path: "/contact", label: i18n.t("contact") },
    { path: "/about", label: i18n.t("about") },
    ...(currentUser
      ? [{ path: "/account", label: i18n.t("account") }]
      : [
          { path: "/login", label: i18n.t("loginPage.login") },
          { path: "/signup", label: i18n.t("signUp") },
        ]),
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center space-x-10">
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              isActive(route.path)
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            }`}
          >
            {route.label}
            {isActive(route.path) && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400"
                initial={false}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-white dark:bg-gray-900 shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Menu
                  </h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <HiX size={20} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-4">
                  <div className="space-y-2">
                    {routes.map((route, index) => (
                      <motion.div
                        key={route.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={route.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            isActive(route.path)
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                          }`}
                        >
                          {route.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Find the index of the current route
  const currentRouteIndex = routes.findIndex(
    (route) => route.path === location.pathname
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <svg
              className="w-6 sm:w-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            className="z-50"
          >
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="px-5 py-20 w-60 bg-white h-screen flex flex-col justify-between"
            >
              <List>
                {routes.map((route, index) => (
                  <ListItem
                    button
                    key={index}
                    component={Link}
                    to={route.path}
                    onClick={toggleDrawer(false)} // Wrap toggleDrawer(false) in an arrow function to prevent immediate execution
                  >
                    <ListItemText primary={route.label} />
                  </ListItem>
                ))}
                {/* If the user is logged in, show the logout button */}
                {currentUser && (
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={handleLogout}
                  >
                    <ListItemText primary={i18n.t("logout")} />
                  </ListItem>
                )}
              </List>

              <footer className="text-center py-4">
                <a
                  href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  © 2024 Mahmoud Mansy.
                  {i18n.t("footer.allRightsReserved")}
                </a>
              </footer>
            </motion.div>
          </Drawer>
        </>
      ) : (
        <Tabs
          variant="standard"
          indicatorColor="primary"
          textColor="primary"
          value={currentRouteIndex !== -1 ? currentRouteIndex : false}
          onClick={window.scrollTo({
            top: 0,
            behavior: "smooth",
          })}
        >
          {routes.map((route, index) => (
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "16px",
                "&.Mui-selected": {
                  color: "black",
                },
                "&:hover": {
                  color: "inherit",
                },
              }}
              key={index}
              label={route.label}
              component={Link}
              to={route.path}
            />
          ))}
          {/* If the user is logged in, show the logout button */}
          {currentUser && (
            <ListItem button component={Link} to="/" onClick={handleLogout}>
              <ListItemText primary={i18n.t("logout")} />
            </ListItem>
          )}
        </Tabs>
      )}
    </>
  );
};

export default Navigations;
