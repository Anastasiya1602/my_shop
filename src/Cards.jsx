import Image from './assets/imgCards/image Product (1).png'
// import Like from './assets/img/like.png'
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export const Cards = () => {

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (      
        <div className='card'>
          <img src={Image} alt="image" />
          <h2 className='title'>Nike Air Max 270 React</h2>
          <p className='price'>$299,43</p>
          <div className='buttons'>
          <button className='button'>delete</button>
          {/* <img className='like'  src={Like} alt="like" /> */}
          {/* <button className='like'><FaHeart /></button> */}
          <button className='like' onClick={handleLikeClick} style={{ color: liked ? 'red' : 'black' }}>
        <FaHeart />
      </button>
          </div>
        </div>
  )
}