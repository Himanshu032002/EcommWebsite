

import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Products.css';


import Navbar from './Navbar';
import coffeeImage from '../images/cofee.jpg'
import fitness from '../images/fitness.jpg'
import headphone from '../images/headphone.jpg'
import laptop from '../images/laptop.jpg'
import phone from '../images/phone.jpg'
import shoes from '../images/shoes.jpg'
import glass from '../images/sunglass.jpg'
import air from '../images/air.jpg'
import back from '../images/back.jpg'
import cook from '../images/cook.jpg'
import dslr from '../images/dslr.jpg'
import game from '../images/game.jpg'
import met from '../images/met.jpg'
import power from '../images/powerbank.jpg'
import speaker from '../images/speaker.jpg'
import tooth from '../images/tooth.jpg'
import tv from '../images/tv.jpg'
import watch from '../images/watch.jpg'
import lamp from '../images/lamp.jpg'

import band from '../images/band.jpg'


const Products = () => {
  const { addToCart } = useContext(CartContext);

  const products = [ {
    id: 1,
    name: 'Smart TV',
    price: 499.99,
    description: '4K Smart TV with HDR support. Perfect for your home entertainment setup.',
    imageUrl:tv,

  },
  {
    id: 2,
    name: 'Smartphone',
    price: 299.99,
    description: 'The latest smartphone with high-end features. Stay connected in style.',
    imageUrl: phone,

  },
  {
    id: 3,
    name: 'Running Shoes',
    price: 79.99,
    description: 'Comfortable running shoes for men. Designed for long-distance running.',
    imageUrl: shoes,
  },
  {
    id: 4,
    name: 'Laptop',
    price: 899.99,
    description: 'Powerful laptop for work and play. Features a high-resolution display and fast processor.',
    imageUrl: laptop,
  },
  {
    id: 5,
    name: 'Wireless Headphones',
    price: 149.99,
    description: 'Premium wireless headphones with noise-cancelling technology. Immerse yourself in music.',
    imageUrl: headphone,
  },
  {
    id: 6,
    name: 'Coffee Maker',
    price: 49.99,
    description: 'Easy-to-use coffee maker for brewing delicious coffee at home.',
    imageUrl: coffeeImage,



  },
  {
    id: 7,
    name: 'Fitness Tracker',
    price: 129.99,
    description: 'Track your fitness goals with this advanced fitness tracker. Stay motivated and active.',
    imageUrl: fitness ,
  },
  {
    id: 8,
    name: 'Sunglasses',
    price: 59.99,
    description: 'Fashionable sunglasses with UV protection. Perfect for sunny days.',
    imageUrl: glass,
  },
  {
    id: 9,
    name: 'Backpack',
    price: 39.99,
    description: 'Durable backpack for everyday use. Keep your belongings safe and organized.',
    imageUrl:back,
  },
  {
    id: 10,
    name: 'Gaming Console',
    price: 399.99,
    description: 'Next-gen gaming console for immersive gaming experiences. Play the latest games with friends.',
    imageUrl: game,
  },
  {
    id: 11,
    name: 'Portable Speaker',
    price: 79.99,
    description: 'Portable speaker with powerful sound. Take your music anywhere you go.',
    imageUrl:speaker,
  },
  {
    id: 12,
    name: 'Digital Camera',
    price: 299.99,
    description: 'High-quality digital camera for capturing memories. Perfect for photography enthusiasts.',
    imageUrl:dslr,
  },
  {
    id: 13,
    name: 'Air Purifier',
    price: 149.99,
    description: 'Air purifier for clean and fresh air at home. Remove allergens and pollutants from the air.',
    imageUrl:air,
  },
  {
    id: 14,
    name: 'Yoga Mat',
    price: 29.99,
    description: 'Premium yoga mat for comfortable yoga sessions. Improve your flexibility and strength.',
    imageUrl: met,
  },
  {
    id: 15,
    name: 'Electric Toothbrush',
    price: 49.99,
    description: 'Electric toothbrush for a thorough and gentle clean. Keep your teeth and gums healthy.',
    imageUrl: tooth,
  },
  {
    id: 16,
    name: 'Smart Watch',
    price: 199.99,
    description: 'Smart watch with fitness tracking and notification features. Stay connected and active.',
    imageUrl: watch,
  },
  {
    id: 17,
    name: 'Desk Lamp',
    price: 39.99,
    description: 'Adjustable desk lamp for bright and focused lighting. Perfect for study or work.',
    imageUrl:lamp,
  },
  {
    id: 18,
    name: 'Power Bank',
    price: 29.99,
    description: 'Portable power bank for charging your devices on the go. Never run out of battery.',
    imageUrl: power,
  },
  {
    id: 19,
    name: 'Resistance Bands',
    price: 19.99,
    description: 'Set of resistance bands for full-body workouts. Tone and strengthen your muscles.',
    imageUrl: band,
  },
  {
    id: 20,
    name: 'Cookware Set',
    price: 149.99,
    description: 'High-quality cookware set for preparing delicious meals. Cook like a professional chef.',
    imageUrl: cook,
  },]; // Your product list

  return (
    
    <>
    <Navbar />
    
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    
  </>
  
  );
};

export default Products;
