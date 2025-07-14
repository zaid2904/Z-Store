import Row1 from "../components/Home/Row1";
import Deal from "../components/Home/Deal";
import FlashSale from "../components/Home/FlashSale";
import BestSelling from "../components/Home/BestSelling";
import Categories from "../components/Home/Categories";
import Services from "../components/common/components/Services";
import AllProducts from "../components/Home/AllProducts";
import Featured from "../components/Home/Featured";
import { ITEMS } from "../components/common/functions/items";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <Row1 />
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flash Sale Section */}
        <section className="py-16 lg:py-24">
          <FlashSale />
        </section>

        {/* Categories Section */}
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
          <Categories />
        </section>

        {/* Best Selling Section */}
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
          <BestSelling items={ITEMS} />
        </section>

        {/* Deal Section */}
        <section className="py-16 lg:py-24">
          <Deal />
        </section>

        {/* All Products Section */}
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
          <AllProducts items={ITEMS} />
        </section>

        {/* Featured Section */}
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
          <Featured />
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 border-t border-gray-100 dark:border-gray-800">
          <Services />
        </section>
      </div>
    </div>
  );
};

export default Home;
