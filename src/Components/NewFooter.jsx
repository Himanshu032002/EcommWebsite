import React from 'react'
import './NewFooter.css';
const NewFooter = () => {
  return (
    <footer className="footer">
    <div className="footer__section">
      <h4 className="footer__sectionTitle">Customer Service</h4>
      <ul className="footer__list">
        <li className="footer__item">Help & Contact</li>
        <li className="footer__item">Shipping & Delivery</li>
        <li className="footer__item">Returns & Refunds</li>
        <li className="footer__item">Track Your Order</li>
      </ul>
    </div>
    <div className="footer__section">
      <h4 className="footer__sectionTitle">About Us</h4>
      <ul className="footer__list">
        <li className="footer__item">Careers</li>
        <li className="footer__item">Press Releases</li>
        <li className="footer__item">Corporate Information</li>
      </ul>
    </div>
    <div className="footer__section">
      <h4 className="footer__sectionTitle">Connect With Us</h4>
      <ul className="footer__list">
        <li className="footer__item">Facebook</li>
        <li className="footer__item">Twitter</li>
        <li className="footer__item">Instagram</li>
      </ul>
    </div>
  </footer>
  )
}

export default NewFooter
