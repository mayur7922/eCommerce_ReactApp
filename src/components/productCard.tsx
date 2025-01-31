import '../ProductCard.css';
import Product from '../ProductInterface';

interface Props {
  product: Product;
  completeTask(productidToDelete: number): void;
}

const ProductCard = ({product, completeTask}: Props) => {
  return (
    <div className="product-card">
    <img 
      src={product.image}
      alt={product.title}
      className="product-image"
    />
    <h2 className="product-title">{product.title}</h2>
    <p className="product-category">{product.category}</p>
    <p className="product-description" title={product.description}>
      {product.description}
    </p>
    <p className="product-price">${product.price}</p>
    <button className="delete-button" onClick={() => {
      completeTask(product.id)
    }}>
      Delete
    </button>
  </div>
  )
}

export default ProductCard;
