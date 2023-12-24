import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Cards = () => {
  
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products')
    promise.then( (res) => {
      console.log(res.data)
      setProducts(res.data)
    })
  }, [])  
  
  const [liked, setLiked] = useState(Array(products.length).fill(false));

  const handleLikeClick = (index) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };
  const showMoreHandler = (id) => {
    navigate(`/product/${id}`)
  }

  


  return (  
  <div className='bestSeller '>
    <button className='button_liked'>Liked</button>
    <div className='cards'>
    {products.map((product, index) => (
      <div  className='card' key={product.id}>
        <img src={product.image} alt="image" />
        <h2 onClick={() => showMoreHandler(product.id)} className='title'>{product.title}<br></br><span className='showmore'>...show more</span></h2>
        <p className='price'>${product.price}</p>
        <div className='buttons'>
          <button className='button'>delete</button>
          <button
            className='like'
            onClick={() => handleLikeClick(index)}
            style={{ color: liked[index] ? 'red' : 'darkblue' }}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    ))}
  </div>  
  </div>  
  )
}