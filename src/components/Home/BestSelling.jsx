import FlashSaleItem from "../common/components/FlashSaleItem";
import PropTypes from "prop-types";
import RedTitle from "../common/components/RedTitle";
import ViewAll from "../common/components/ViewAll";
import i18n from "../common/components/LangConfig";
import { motion } from "framer-motion";

const BestSelling = ({ items }) => {
  const sortedItems = items.sort(
    (a, b) => parseFloat(b.rates) - parseFloat(a.rates)
  );
  const BestItems = sortedItems.slice(0, 4);
  
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <RedTitle title={i18n.t("bestSelling.redTitle")} />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary">
              {i18n.t("bestSelling.title")}
            </h2>
            <ViewAll name={i18n.t("redButtons.viewAll")} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {BestItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <FlashSaleItem
                item={item}
                index={index}
                totalItems={items.length}
                stars={item.stars}
                rates={item.rates}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

BestSelling.propTypes = {
  items: PropTypes.array.isRequired,
};

export default BestSelling;
