import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Cards = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products'); 
    promise.then((res) => {
      console.log(res.data);
      setProducts(res.data); 
      setLiked(Array(res.data.length).fill(false)); 
    });
  }, []); 

  const handleLikeClick = (productId) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[productId] = !newLiked[productId];
      return newLiked;
    });
  };

  const showMoreHandler = (id) => {
    navigate('/product/' + id);
  };

  const handleDelete = (productToDelete) => {
    const newProducts = products.filter((product) => product !== productToDelete);
    setProducts(newProducts);
  };

  const showLikedProducts = () => {
    const likedProducts = products.filter((product) => liked[product.id]); 
    setProducts(likedProducts);
  };

  const resetProducts = () => {
    const promise = axios.get('https://masterclass.kimitsu.it-incubator.ru/api/products'); 
    promise.then((res) => {
      setProducts(res.data); 
    });
  };

  return (
    <div className='bestSeller'>
      <button onClick={showLikedProducts} className='button_liked'>Liked</button>
      <button onClick={resetProducts} className='button_reset'>Reset</button>
      <div className='cards'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <img src={product.image} alt="image" />
            <h2 onClick={() => showMoreHandler(product.id)} className='title'>{product.title}<br /> <span className='showmore'>...show more</span></h2>
            <p className='price'>${product.price}</p>
            <div className='buttons'>
              <button onClick={() => handleDelete(product)} className='button'>delete</button>
              <button
                className='like'
                onClick={() => handleLikeClick(product.id)}
                style={{ color: liked[product.id] ? 'red' : 'darkblue' }}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
