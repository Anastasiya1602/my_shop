import { useEffect, useState } from "react"
import axios from 'axios'
import cartWhite from './assets/img/cartWhite.svg'

export const Product = () => {

const [product, setProduct] = useState([null]);

useEffect(() => {
    axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products/1')
        .then((res) => {
          const product = res.data
          setProduct(product)
        })
}, []);

  return (
    <div>
  <div>Заглушка. Понадобится чуть позже. Не удаляейте :)</div>  
  {
    product === null
    ? <h2>Продукт еще грузится ...</h2>:
    <div className="product">
    <img src={product.image} alt="" />
    <div className="info">
      <p className="title">{product.title}</p>
      <p className="price">$ {product.price}</p>
      <div className="rating">
      </div>
      <div className="category">
        <span>Category:</span>
        <p>{product.category}</p>
      </div>
      <p className="description">{product.description}</p>
      <button>
        <img src={cartWhite} alt="" />
        Add to cart
      </button>
    </div>
  </div>
  
  }
  
</div>
  )
}