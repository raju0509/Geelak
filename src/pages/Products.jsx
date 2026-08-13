import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InquiryCTA from "../sections/InquiryCTA";
import { ArrowRight } from "lucide-react";

function Products() {
  const products = [
    {
      number: "01",
      category: "Coffee",
      title: "Coffee",
      description:
        "Quality coffee products prepared for customers and markets across borders.",
      image: "/images/products/coffee.jpg",
    },

    {
      number: "02",
      category: "Agricultural Produce",
      title: "Agriculture Products",
      description:
        "Selected agricultural products connecting Indian sourcing with global opportunities.",
      image: "/images/products/agriculture.jpg",
    },

    {
      number: "03",
      category: "Leather",
      title: "Leather",
      description:
        "Quality leather products prepared with a focus on international markets.",
      image: "/images/products/leather.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      <main>

        {/* PRODUCTS HERO */}

        <section className="products-page-hero">

          <div className="container">

            <span className="section-eyebrow">
              OUR PRODUCTS
            </span>

            <h1>
              Products That
              <span>Cross Borders.</span>
            </h1>

            <p>
              Explore quality product categories GEELAK is preparing
              to connect from Indian markets with customers around
              the world.
            </p>

          </div>

        </section>


        {/* PRODUCT CATEGORIES */}

        <section className="products-page-section section">

          <div className="container">

            <div className="products-page-grid">

              {products.map((product) => (

                <article
                  className="products-page-card"
                  key={product.number}
                >

                  <div className="products-page-image">

                    <img
                      src={product.image}
                      alt={product.title}
                    />

                    <span className="products-page-number">
                      {product.number}
                    </span>

                  </div>


                  <div className="products-page-content">

                    <span className="product-category">
                      {product.category}
                    </span>

                    <h2>
                      {product.title}
                    </h2>

                    <p>
                      {product.description}
                    </p>

                    <a href="/contact">

                      <span>
                        Send an Inquiry
                      </span>

                      <ArrowRight size={17} />

                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* EXPORT MESSAGE */}

        <section className="products-message section">

          <div className="container">

            <div className="products-message-inner">

              <span className="section-eyebrow">
                GLOBAL OPPORTUNITY
              </span>

              <h2>
                From Indian Markets
                <span>To Global Customers.</span>
              </h2>

              <p>
                GEELAK is focused on building reliable connections
                between quality Indian products and international
                markets.
              </p>

            </div>

          </div>

        </section>


        <InquiryCTA />

      </main>

      <Footer />

    </>
  );
}

export default Products;