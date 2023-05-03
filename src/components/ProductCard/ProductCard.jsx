import './ProductCard.css'
import ProductImage from "../ProductImage/ProductImage"
import ProductInfo from "../ProductInfo/ProductInfo"
import ProductButton from "../ProductButton/ProductButton"

const ProductCard = () => {
    return (
        <div className='ProductCard'>
            <ProductImage /><ProductInfo /><ProductButton />
        </div>
        
    )
}

export default ProductCard