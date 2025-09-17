import { Brands } from "./comon/Brands";
import { TopBar } from "./comon/TopBar";
import { Header } from "./Header";
import { Navbar } from "./comon/NavBar";
import { NewProducts } from "./NewProducts";
import { TopSellingProducts } from "./TopSelling";
import { Categories } from "./Categories";

import { Testimonials } from "./Testimonal/Testimonial";
import Footer from "./comon/Footer";
import Newsletter from "./comon/NewsLetter";

export const Home = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Header />
      <Brands />
      <NewProducts />
      <TopSellingProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
