import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import Product from "./ProductInterface";
import fetchData from "./components/fetchData";
import './App.css';

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: "",
    category: "",
    description: "",
    price: 0,
    image: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetchData();
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const completeTask = (productidToDelete: number): void => {
    setProducts(products.filter((product) => {
      return product.id != productidToDelete;
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProduct = { ...newProduct, id: Date.now() };
    setProducts([...products, updatedProduct]);
    setNewProduct({ id: 0, title: "", category: "", description: "", price: 0, image: "" });
  };

  return (
    <div className="app-container">

      <h1 className="heading">Buy Products</h1>
      <ProductList products={products}  completeTask={completeTask} />

      <form className="product-form" onSubmit={handleAddProduct}>
        <h2>Add new product</h2>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>

    </div>
  );
};

export default App;
