import { productList } from "../../data/products";
import ProductItem from "./ProductItem";

function ProductList() {
    return(
        
        <>
            <div className="product__list">
                {productList.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </div>
        </>
    )
};

export default ProductList;