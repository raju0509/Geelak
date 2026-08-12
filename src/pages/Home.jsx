import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import TrustBar from "../sections/TrustBar";
import AboutPreview from "../sections/AboutPreview";
import ProductsPreview from "../sections/ProductsPreview";
import WhyChooseUs from "../sections/WhyChooseUs";
import GlobalReach from "../sections/GlobalReach";
import InquiryCTA from "../sections/InquiryCTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TrustBar />

        <AboutPreview />

        <ProductsPreview />

        <WhyChooseUs />

        <GlobalReach />

        <InquiryCTA />
        <Footer />
      </main>
    </>
  );
}

export default Home;