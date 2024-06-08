import React, { useState } from 'react';
import img1 from './images/Serenity-spa-about-THERAPISTS1-1024x683.jpg';
import img2 from './images/shutterstock-desktop.webp';
import img3 from './images/t600x362.jpg';

interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  quantity?: number;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Relaxation Massage',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 100,
    img: img1
  },
  {
    id: 2,
    name: 'Hot Stone Massage',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 120,
    img: img2
  },
  {
    id: 3,
    name: 'Deep Tissue Massage',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 150,
    img: img3
  }
];

const Service = () => {
  const [cart, setCart] = useState<Service[]>([]);

  const addToCart = (item: Service) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity = (updatedCart[existingItemIndex].quantity || 0) + 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (index: number) => {
    alert('Item removed from cart');
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={service.img} alt={service.name} className="w-full h-64 object-cover object-center" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
              <p className="text-gray-700">{service.description}</p>
              <button
                style={{ marginTop: 10 }}
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => addToCart(service)}
              >
                Add to Cart
              </button>
              <p className="text-gray-700">Price: ${service.price}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          {cart.map((item, index) => (
            <div key={index} className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                    {item.name}
                  </h5>
                  <img src={item.img} alt={item.name} style={{ width: '200px', height: '200px' }} className="rounded-full" />
                  <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500" onClick={() => removeFromCart(index)}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                        cx="17"
                        cy="17"
                        r="17"
                        fill=""
                      />
                      <path
                        className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                        stroke="#EF4444"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                  Price: ${item.price}
                </p>
                {item.quantity && <p>Quantity: {item.quantity}</p>}
              </div>
            </div>
          ))}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Subtotal
            </h5>
            <div className="flex items-center justify-between gap-5">
              <button className="rounded-full py-2.5 px-3 bg-indigo-50 text-indigo-600 font-semibold text-xs text-center whitespace-nowrap transition-all duration-500 hover:bg-indigo-100">
                Promo Code?
              </button>
              <h6 className="font-manrope font-bold text-3xl lead-10 text-indigo-600">
                ${cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}
              </h6>
            </div>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <button
              type="button"
              className="w-full py-4 px-6 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-white font-medium text-base transition-all duration-500 rounded-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
