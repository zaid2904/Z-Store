import RedTitle from "../common/components/RedTitle";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import { motion } from "framer-motion";

const Featured = () => {
  const ShopNow = () => {
    return (
      <motion.button
        whileHover={{ x: 4 }}
        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 group"
      >
        <span className="border-b border-emerald-400 group-hover:border-emerald-300 font-semibold">
          {i18n.t("featured.shopNow")}
        </span>
        <motion.svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <path
            d="M3.5 12H20M20 12L13 5M20 12L13 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    );
  };

  const playstationItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.18.title")
  );
  const womenCollectionsItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.20.title")
  );
  const speakersItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.19.title")
  );
  const perfumesItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.16.title")
  );

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <RedTitle title={i18n.t("featured.redTitle")} />
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mt-6">
            {i18n.t("featured.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* PlayStation Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative card-interactive bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden group"
          >
            <div className="relative h-[400px] lg:h-[500px] flex items-end p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              
              <div className="absolute top-8 right-8 z-20">
                <Link
                  to={{ pathname: `/allProducts/${playstationItem.title}` }}
                  key={playstationItem.id}
                >
                  <motion.img
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    className="max-w-xs w-full h-auto object-contain drop-shadow-2xl"
                    src={playstationItem.imageSrc}
                    alt={playstationItem.title}
                  />
                </Link>
              </div>
              
              <div className="relative z-10 text-white max-w-sm">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {i18n.t("featured.playStation.title")}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {i18n.t("featured.playStation.description")}
                </p>
                <Link
                  to={{ pathname: `/allProducts/${playstationItem.title}` }}
                  key={playstationItem.id}
                >
                  <ShopNow />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Women's Collections */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative card-interactive bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden group h-[240px]"
            >
              <div className="relative h-full flex items-center justify-between p-8">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-pattern opacity-10"></div>
                
                <div className="relative z-10 text-white flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    {i18n.t("featured.WomenCollections.title")}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm">
                    {i18n.t("featured.WomenCollections.description")}
                  </p>
                  <Link
                    to={{
                      pathname: `/allProducts/${womenCollectionsItem.title}`,
                    }}
                    key={womenCollectionsItem.id}
                  >
                    <ShopNow />
                  </Link>
                </div>
                
                <div className="relative z-10">
                  <Link
                    to={{
                      pathname: `/allProducts/${womenCollectionsItem.title}`,
                    }}
                    key={womenCollectionsItem.id}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      loading="lazy"
                      className="max-w-32 lg:max-w-40 w-full h-auto object-contain drop-shadow-2xl"
                      src={womenCollectionsItem.imageSrc}
                      alt={womenCollectionsItem.title}
                    />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Speakers */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative card-interactive bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden group h-[240px]"
              >
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  
                  <div className="relative z-10 text-white">
                    <h3 className="text-lg lg:text-xl font-bold mb-2">
                      {i18n.t("featured.speakers.title")}
                    </h3>
                    <p className="text-slate-300 mb-3 text-sm">
                      {i18n.t("featured.speakers.description")}
                    </p>
                    <Link
                      to={{ pathname: `/allProducts/${speakersItem.title}` }}
                      key={speakersItem.id}
                    >
                      <ShopNow />
                    </Link>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      to={{ pathname: `/allProducts/${speakersItem.title}` }}
                      key={speakersItem.id}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        className="max-w-24 lg:max-w-28 w-full h-auto object-contain drop-shadow-2xl"
                        src={speakersItem.imageSrc}
                        alt={speakersItem.title}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Perfume */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative card-interactive bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden group h-[240px]"
              >
                <div className="relative h-full flex flex-col justify-between p-6">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  
                  <div className="relative z-10 text-white">
                    <h3 className="text-lg lg:text-xl font-bold mb-2">
                      {i18n.t("featured.perfume.title")}
                    </h3>
                    <p className="text-slate-300 mb-3 text-sm">
                      {i18n.t("featured.perfume.description")}
                    </p>
                    <Link
                      to={{ pathname: `/allProducts/${perfumesItem.title}` }}
                      key={perfumesItem.id}
                    >
                      <ShopNow />
                    </Link>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link
                      to={{ pathname: `/allProducts/${perfumesItem.title}` }}
                      key={perfumesItem.id}
                    >
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        loading="lazy"
                        className="max-w-20 lg:max-w-24 w-full h-auto object-contain drop-shadow-2xl"
                        src={perfumesItem.imageSrc}
                        alt={perfumesItem.title}
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
