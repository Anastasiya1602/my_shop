import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Product = () => {

const [product, setProduct] = useState([null]);
let { productId } = useParams();
const navigate = useNavigate()
const GoBack = () => {
  navigate('/')
}
useEffect(() => {
    axios.get(`https://masterclass.kimitsu.it-incubator.ru/api/products/${productId}`)
        .then((res) => {
          const product = res.data
          setProduct(product)
        })
}, []);

  return (
    <div>
  {/* <div>Заглушка. Понадобится чуть позже. Не удаляейте :)</div>   */}
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
      <button onClick={() => GoBack()} >back</button>
    </div>
  </div>
  
  }
  
</div>
  )
}