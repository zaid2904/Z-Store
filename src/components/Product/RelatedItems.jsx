/* eslint-disable react/prop-types */
import i18n from "../common/components/LangConfig";
import FlashSaleItem from "../common/components/FlashSaleItem";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import { ITEMS } from "../common/functions/items";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const RelatedItems = ({ selectedProduct }) => {
  const relatedItems = ITEMS.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  ).slice(0, 4); // Limit to 4 items for cleaner look

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      {/* Apple-style hero spacing */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-32">
        
        {/* Minimal title section - Apple style */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-light text-gray-900 dark:text-gray-100 mb-4 tracking-tight transition-colors duration-300">
            You might also like
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Carefully curated products that complement your choice
          </p>
        </motion.div>

        {/* Apple-style product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {relatedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group cursor-pointer"
            >
              {/* Apple-style product card */}
              <Link to={`/allProducts/${item.title}`} className="block">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 shadow-sm hover:shadow-lg border border-gray-100 dark:border-gray-700">
                  
                  {/* Product image container */}
                  <div className="aspect-square p-8 lg:p-12 flex items-center justify-center">
                    <motion.img
                      src={item.imageSrc}
                      alt={item.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full object-contain transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Discount badge - Apple style */}
                    {item.discount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        -{item.discount}%
                      </div>
                    )}
                  </div>
                  
                  {/* Product info */}
                  <div className="p-6 lg:p-8 text-center">
                    <h3 className="text-lg lg:text-xl font-medium text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Price section */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <span className="text-xl lg:text-2xl font-light text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        ${item.price}
                      </span>
                      {item.discount && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through transition-colors duration-300">
                          ${(item.price + (item.price * item.discount) / 100).toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    {/* Rating - minimal style */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < item.stars ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({item.rates})</span>
                    </div>
                    
                    {/* Apple-style CTA button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 text-sm lg:text-base"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Apple-style CTA section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 lg:mt-32"
        >
          <Link 
            to="/allProducts"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-lg transition-colors duration-300 group"
          >
            Explore all products
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedItems;
