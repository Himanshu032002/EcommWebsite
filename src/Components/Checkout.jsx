import React, { useState } from 'react';
import { useCart } from './CartContext';
import Navbar from './Navbar';
import pptxgen from 'pptxgenjs'; // Import pptxgen library
import './Checkout.css'; // Import your CSS file

const Checkout = () => {
  const { cart } = useCart();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    const pptx = new pptxgen();

    cart.forEach((item) => {
      const slide = pptx.addSlide();

      slide.addText('Order Details', { x: 1, y: 0.5, fontSize: 18, bold: true });

      slide.addImage({ path: process.env.PUBLIC_URL + item.imageUrl, x: 0.5, y: 1.5, w: 2, h: 1.5 });

      slide.addText(`Product: ${item.name}`, { x: 3, y: 1.5, fontSize: 14, bold: true });
      slide.addText(`Price: $${item.price}`, { x: 3, y: 2, fontSize: 12 });
      slide.addText('Delivery Details:', { x: 3, y: 2.5, fontSize: 12, bold: true });
      slide.addText(`- Estimated Delivery Date: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, { x: 3, y: 3, fontSize: 10 });
      slide.addText('Seller: Amazon', { x: 3, y: 3.5, fontSize: 10 });
      slide.addText('Shipping Method: Standard', { x: 3, y: 4, fontSize: 10 });
      slide.addText('Warranty & Guarantee:', { x: 3, y: 4.5, fontSize: 12, bold: true });
      slide.addText('- Warranty: 1 Year', { x: 3, y: 5, fontSize: 10 });
      slide.addText('- Guarantee: 30-Day Money-Back Guarantee', { x: 3, y: 5.5, fontSize: 10 });
    });

    pptx.writeFile({ fileName: 'order-details' }); // Download the PPT file

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <h2>Order Confirmation & Download Details</h2>
      <button onClick={handleDownload} disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download Details'}
      </button>
      {isDownloading && (
        <div className="progress-indicator">
          <div className="progress-bar"></div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
