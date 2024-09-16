import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import myImage from './ac9323b3-8e09-4d30-8f71-2af454cc644c.png';
import myImage2 from './kitchnix logo.jpg'

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white-600 bg-white flex flex-col items-center ">
      
      <div className="w-full bg-white shadow-lg py-2">
        <div className="container mx-auto flex justify-between items-center px-3 md:px-1">
          <div className="text-2xl font-bold">
         
            <img src={myImage2} alt="Logo" className="h-16" />
          </div>
          <nav className="space-x-3 text-sm text-green-600 ">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#sourcing" className="hover:underline">Sourcing</a>
            <a href="#help" className="hover:underline">Help</a>
          </nav>
          
          <div className="space-x-4">
            <button className="text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-green-50"
              onClick={() => navigate('/Login')}>
              Log in
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              onClick={() => navigate('/signup')}>
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-20 h-full">
        {/* Text Content */}
        <div className="w-full md:w-2/5  text-center md:text-left">
          <h1 className="pl-45 text-5xl font-bold leading-tight mb-6">
            Delicious Menus and Freshly Sourced Ingredients for Easy Home Cooking
          </h1>
          <p className="text-3xl text-gray-600  mb-6">
            Get perfectly proportioned meal ingredient boxes delivered to your door, making home-cooked meals easy, convenient, and delicious.
          </p>
          <div className='item-left'>
          <button className=" bg-white-600 text-green-600 border border-green-600 px-4 py-2 rounded-lg hover:bg-white-600"
              onClick={() => navigate('/Login')}>
              Explore
            </button>
            </div>
          </div>
              {/* Image Placeholder */}
           <div className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 ml-auto">
              {/* Insert Image here */}
             <div className="bg-white w-96 h-96 md:w-128 md:h-128">
              <img src={myImage} alt="Delicious Food" className="w-full h-full object-cover rounded-full" />
             </div>
           </div>

      </div>
     
    </div>
    
  );
}

export default LandingPage;
