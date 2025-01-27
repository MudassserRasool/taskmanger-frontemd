import React from 'react';
import { Error404PageImage } from '../../assets';

function Error404Page() {
  return (
    <div className="flex flex-col items-center h-full mt-28  md:flex-row  md:gap-4 justify-center ">
      <div className="text-center md:mt-8 md:flex-1 md:pl-16">
        <p className="text-[secondary] text-lg mb-2">
          WE CAN’T FOUND THIS PAGE
        </p>
        <h1 className="text-6xl font-bold text-[secondary] mb-2">404</h1>
        <p className="text-xl text-[secondary] mb-4">PAGE LOST</p>
        <button
          onClick={() => (window.location.href = '/')}
          className="mt-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-purple-700"
        >
          Go Back Home
        </button>
      </div>
      <div className="mt-10 md:mt-0 md:flex-1 md:flex md:justify-center">
        <img src={Error404PageImage} alt="Error" className="w-96" />
      </div>
    </div>
  );
}

export default Error404Page;
