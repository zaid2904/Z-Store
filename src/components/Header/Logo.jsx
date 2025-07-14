import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center gap-3 group transition-all duration-300"
    >
      {/* Modern Z logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
          <span className="text-white font-bold text-2xl tracking-tight">Z</span>
        </div>
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
      </motion.div>
      
      {/* Brand name */}
      <div className="hidden sm:flex flex-col justify-center">
        <h1 className="text-2xl font-bold gradient-text-primary tracking-tight leading-tight">
          Z-Store
        </h1>
        <p className="text-xs text-secondary font-medium leading-none">
          Modern Shopping
        </p>
      </div>
    </Link>
  );
};

export default Logo;
