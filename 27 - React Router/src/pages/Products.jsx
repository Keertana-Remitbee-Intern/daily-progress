import { Link } from "react-router-dom";
import products from "../data";

function Products() {
  return (
    <div className="container">
      <header>
        <div>
          <h1>Footwear Store</h1>
        </div>
      </header>

      <div className="products-header">
        <h2>Products</h2>
        <span className="products-count">
          {products.length} items
        </span>
      </div>

      <main>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>

              <p className="category">
                {product.category}
              </p>

              <p className="price">
                ₹{product.price}
              </p>

              <p className="quantity">
                Quantity: {product.quantity}
              </p>

              <div className="product-actions">
                <Link to={`/products/${product.id}`}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Products;