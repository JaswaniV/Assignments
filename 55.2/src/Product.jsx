import React from "react";

function Product({ title, price, photo, description }) {
  return (
    <div className="flex justify-center items-center p-6 bg-gray-100 min-h-screen">
      <div className="flex bg-white border border-gray-300 rounded-lg shadow-md p-6 w-full max-w-2xl">
        
       

        <div className="w-[200px] h-[200px] flex-shrink-0">
          <img
            src={photo}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

     
     
        <div className="pl-6 flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>
          <p className="text-xl font-bold text-gray-800 mb-4">${price}</p>

          
          
          
          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
            />
            <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Product;
