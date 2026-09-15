import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Running Shoes",
    category: "Running",
    price: 2499,
    quantity: 10,
  },
  {
    id: 2,
    name: "Sneakers",
    category: "Sneakers",
    price: 1999,
    quantity: 8,
  },
  {
    id: 3,
    name: "Loafers",
    category: "Loafers",
    price: 2999,
    quantity: 3,
  },
  {
    id: 4,
    name: "High Tops",
    category: "Sneakers",
    price: 2799,
    quantity: 6,
  },
  {
    id: 5,
    name: "Sandals",
    category: "Sandals",
    price: 999,
    quantity: 0,
  },
  {
    id: 6,
    name: "Hiking Shoes",
    category: "Hiking",
    price: 3499,
    quantity: 12,
  },
  {
    id: 7,
    name: "Slip Ons",
    category: "Slip-ons",
    price: 1499,
    quantity: 2,
  },
  {
    id: 8,
    name: "Sports Shoes",
    category: "Running",
    price: 2299,
    quantity: 7,
  },
  {
    id: 9,
    name: "Flats",
    category: "Flats",
    price: 1299,
    quantity: 0,
  },
  {
    id: 10,
    name: "Boots",
    category: "Boots",
    price: 3999,
    quantity: 5,
  },
];

function getStockStatus(quantity) {
  if (quantity === 0) return "Out of Stock";
  if (quantity <= 3) return "Low Stock";
  return "In Stock";
}

function App() {
  const [products, setProducts] = useState(initialProducts);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  // form states
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [newCategory, setNewCategory] = useState("Running");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  // Edit quantity states
  const [editingId, setEditingId] = useState(null);
  const [editQuantity, setEditQuantity] = useState("");

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "All" || product.category === category;
    const matchesMinPrice =
      minPrice === "" || product.price >= Number(minPrice);
    const matchesMaxPrice =
      maxPrice === "" || product.price <= Number(maxPrice);
    const matchesStock =
      !inStockOnly || product.quantity > 0;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesStock
    );
  });

  // Add new product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || price === "" || quantity === "") {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category: newCategory,
      price: Number(price),
      quantity: Number(quantity),
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setName("");
    setNewCategory("Running");
    setPrice("");
    setQuantity("");
    setShowForm(false);
  };

  // Start editing quantity
  const handleEdit = (product) => {
    setEditingId(product.id);
    setEditQuantity(product.quantity);
  };

  // Save quantity
  const handleSave = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Number(editQuantity),
            }
          : product
      )
    );

    setEditingId(null);
    setEditQuantity("");
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="container">

      {/* Header */}
      <header>
        <div>
          <h1>Footwear Store</h1>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Product
        </button>
      </header>

      {/* Add Product Form */}
      {showForm && (
        <div className="add-form">
          <h2>Add New Footwear</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option value="Running">Running</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Loafers">Loafers</option>
                <option value="Sandals">Sandals</option>
                <option value="Hiking">Hiking</option>
                <option value="Slip-ons">Slip-ons</option>
                <option value="Flats">Flats</option>
                <option value="Boots">Boots</option>
              </select>
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Price</label>

                <input
                  type="number"
                  placeholder="Price"
                  min="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Quantity</label>

                <input
                  type="number"
                  placeholder="Quantity"
                  min="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>

            </div>

            <div className="form-actions">

              <button
                className="submit-button"
                type="submit"
              >
                Add Product
              </button>

              <button
                className="form-cancel"
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      )}

      {/* Filters */}
      <section className="filters">

        <input
          className="search-input"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Running">Running</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Loafers">Loafers</option>
          <option value="Sandals">Sandals</option>
          <option value="Hiking">Hiking</option>
          <option value="Slip-ons">Slip-ons</option>
          <option value="Flats">Flats</option>
          <option value="Boots">Boots</option>
        </select>

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <label className="stock-filter">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          In stock only
        </label>

      </section>

      {/* Products Header */}
      <div className="products-header">

        <h2>Products</h2>
        <span className="products-count">
          {filteredProducts.length} items
        </span>

      </div>

      {/* Product List */}
      <main>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              const stockStatus = getStockStatus(product.quantity);
              return (

                <div
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-title">
                    <h3>{product.name}</h3>
                    <span
                      className={
                        product.quantity === 0
                          ? "out-of-stock"
                          : product.quantity <= 3
                          ? "low-stock"
                          : "in-stock"
                      }
                    >
                      {stockStatus}
                    </span>
                  </div>

                  <p className="category">
                    {product.category}
                  </p>
                  <p className="price">
                    ₹{product.price}
                  </p>

                  {editingId === product.id ? (
                    <>
                      <input
                        className="edit-quantity"
                        type="number"
                        min="0"
                        value={editQuantity}
                        onChange={(e) =>
                          setEditQuantity(e.target.value)
                        }
                      />

                      <div className="product-actions">
                        <button
                          className="save-button"
                          onClick={() => handleSave(product.id)}
                        >
                          Save
                        </button>

                        <button
                          className="cancel-button"
                          onClick={() => setEditingId(null)}
                        >
                          Cancel
                        </button>

                      </div>
                    </>

                  ) : (
                    <>
                      <p className="quantity">
                        Quantity: {product.quantity}
                      </p>

                      <div className="product-actions">

                        <button
                          className="edit-button"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>

                        <button
                          className="delete-button"
                          onClick={() =>
                            handleDelete(product.id)
                          }
                        >
                          Delete
                        </button>

                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

        ) : (

          <div className="empty-state">
            <p>No products found.</p>
          </div>

        )}

      </main>
    </div>
  );
}

export default App;