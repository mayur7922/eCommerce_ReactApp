import ProductCard from "./productCard";
import Product from "../ProductInterface";

interface Props {
  products: Product[];
  completeTask(taskidToDelete: number): void;
}

const ProductList = ({products, completeTask}: Props) => {
  return (
     <div className="product-list">
        {products.map((product) => (
            <ProductCard key={product.id} product={product}  completeTask={completeTask} />
        ))}
    </div>
  )
}

export default ProductList;
