import { ArrowUpRight } from "lucide-react";

const products = [
  {
    number: "01",
    name: "Coffee",
    category: "Coffee",
    description:
      "Quality coffee products sourced from India for customers and international markets.",
    image: "/images/products/coffee.jpg",
  },
  {
    number: "02",
    name: "Agriculture Products",
    category: "Agricultural Produce",
    description:
      "Selected agricultural products sourced from India and prepared for international markets.",
    image: "/images/products/agriculture.jpg",
  },
  {
    number: "03",
    name: "Leather",
    category: "Leather",
    description:
      "Quality leather products sourced for customers seeking reliable products from India.",
    image: "/images/products/leather.jpg",
  },
];

function ProductsPreview() {
  return (
    <section className="products-preview section">
      <div className="container">

        {/* Section Header */}
        <div className="products-header">

          <div>
            <span className="section-eyebrow">
              OUR PRODUCTS
            </span>

            <h2 className="section-heading">
              Products That
              <span>Cross Borders.</span>
            </h2>
          </div>

          <p className="products-intro">
            Explore the product categories GEELAK is preparing
            to take from Indian markets to customers around the world.
          </p>

        </div>


        {/* Product Cards */}
        <div className="products-grid">

          {products.map((product) => (
            <article
              className="product-card"
              key={product.number}
            >

              {/* Product Image */}
              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-number">
                  {product.number}
                </span>

                <a
                  href="/products"
                  className="product-arrow"
                  aria-label={`View ${product.name}`}
                >
                  <ArrowUpRight size={21} />
                </a>

              </div>


              {/* Product Content */}
              <div className="product-card-content">

                <span className="product-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <p>
                  {product.description}
                </p>

                <a
                  href="/products"
                  className="product-link"
                >
                  Explore Product
                  <ArrowUpRight size={16} />
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProductsPreview;