

import React from "react";

function Product({ photo, title, category, price }) {
    return (
        
            <div className="p-4 shadow-lg">
                <div className="w-32">
                    <img
                        src={photo}
                        alt={title}
                        className="w-32  h-32 object-cover rounded shadow-lg"
                    />
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-sm text-gray-500">{category}</p>
                    <p className="text-lg font-bold">${price.toFixed(2)}</p>
                </div>
            </div>
    );
}

export default Product;


