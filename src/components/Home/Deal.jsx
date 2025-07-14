import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import { motion } from "framer-motion";

// Add 24 hours to the current time to calculate the deadline
const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);

const Deal = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(tomorrow)
  );

  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.15.title")
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-emerald-900/10"></div>
      
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-emerald-500 text-black font-semibold rounded-full text-sm"
              >
                {i18n.t("deal.greenTitle")}
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                {i18n.t("deal.title")}
              </motion.h2>
            </div>

            {/* Countdown Timer */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { value: timeLeft.days, label: i18n.t("deal.days") },
                { value: timeLeft.hours, label: i18n.t("deal.hours") },
                { value: timeLeft.minutes, label: i18n.t("deal.minutes") },
                { value: timeLeft.seconds, label: i18n.t("deal.seconds") }
              ].map((time, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white text-slate-900 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-xl lg:text-2xl font-bold">
                      {time.value}
                    </span>
                  </div>
                  <span className="text-xs lg:text-sm text-slate-300 mt-2 text-center font-medium">
                    {time.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                to={{ pathname: `/allProducts/${dealItem.title}` }}
                key={dealItem.id}
              >
                <button className="btn-accent text-lg px-10 py-4 shadow-2xl hover:shadow-emerald-500/25">
                  {i18n.t("deal.buyNow")}
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <Link
              to={{ pathname: `/allProducts/${dealItem.title}` }}
              key={dealItem.id}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={dealItem.imageSrc}
                  alt={dealItem.title}
                  loading="lazy"
                  className="max-w-sm lg:max-w-md xl:max-w-lg w-full h-auto object-contain drop-shadow-2xl"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-3xl blur-3xl -z-10"></div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
