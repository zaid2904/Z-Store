import FlashSaleItem from "../common/components/FlashSaleItem";
import { useState, useEffect } from "react";
import RedTitle from "../common/components/RedTitle";
import Arrows from "../common/components/Arrows";
import ViewAll from "../common/components/ViewAll";
import calculateTimeLeft from "../common/functions/calculateTimeLeft";
import i18n from "../common/components/LangConfig";
import { ITEMS } from "../common/functions/items";
import { motion } from "framer-motion";

// Add 24 hours to the current time to calculate the deadline
const tomorrow = new Date();
tomorrow.setHours(tomorrow.getHours() + 24);

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(tomorrow)
  );
  const saleItems = ITEMS.filter((item) => item.discount !== "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(tomorrow));
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <RedTitle title={i18n.t("homeSections.row2.0")} />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                {i18n.t("homeSections.row2.1")}
              </h2>
              
              {/* Modern countdown timer */}
              <div className="flex items-center gap-3">
                {[
                  { value: timeLeft.days, label: i18n.t("homeSections.row2.2") },
                  { value: timeLeft.hours, label: i18n.t("homeSections.row2.3") },
                  { value: timeLeft.minutes, label: i18n.t("homeSections.row2.4") },
                  { value: timeLeft.seconds, label: i18n.t("homeSections.row2.5") }
                ].map((time, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 bg-gradient-primary text-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold">{time.value}</span>
                    </div>
                    <div className="text-xs text-secondary mt-1 font-medium">
                      {time.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Arrows />
            </div>
          </div>
        </motion.div>

        {/* Products grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {saleItems.slice(0, 8).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FlashSaleItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <ViewAll />
        </motion.div>
      </div>
    </section>
  );
};

export default FlashSale;
