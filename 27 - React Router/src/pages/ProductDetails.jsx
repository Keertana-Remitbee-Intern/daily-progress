import { Link, useParams } from "react-router-dom";
import products from "../data";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container">
        <h1>Product Not Found</h1>

        <Link className="back-link" to="/products">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <div>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </div>
      </header>

      <main className="details">
        <p className="price">₹{product.price}</p>

        <p>{product.description}</p>

        <p className="quantity">
          Quantity: {product.quantity}
        </p>

        <Link className="back-link" to="/">
          Back to Products
        </Link>
      </main>
    </div>
  );
}

export default ProductDetails;