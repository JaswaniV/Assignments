// import React from "react";
// import Product from "./Product";

// function App() {
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         <Product
//           photo="https://i.ibb.co/0BGf9rL/black-mug.jpg"
//           title="Black Printed Coffee Mug"
//           category="Mugs"
//           price={15.0}
//         />
//         <Product
//           photo="https://i.ibb.co/0BGf9rL/black-mug.jpg"
//           title="Father's Day Coffee Mug"
//           category="Mugs"
//           price={19.0}
//         />
//         <Product
//           photo="https://i.ibb.co/vxwmzz6/blue-shirt.png"
//           title="Green Printed Tshirt"
//           category="T-Shirts"
//           price={34.0}
//         />
//         <Product
//           photo="https://i.ibb.co/0BGf9rL/black-mug.jpg"
//           title="Personalised Mug"
//           category="Mugs"
//           price={15.0}
//         />
//         <Product
//           photo="https://i.ibb.co/2vMKzKL/yellow-shirt.png"
//           title="Printed Brown Tshirt"
//           category="T-Shirts"
//           price={25.0}
//           originalPrice={34.0}
//           onSale
//         />
//         <Product
//           photo="https://i.ibb.co/dB31P1P/darkblue-shirt.png"
//           title="Printed Dark Blue Tshirt"
//           category="T-Shirts"
//           price={34.0}
//         />
//         <Product
//           photo="https://i.ibb.co/RzC5yXb/green-shirt.png"
//           title="Printed Green Tshirt"
//           category="T-Shirts"
//           price={28.0}
//           originalPrice={35.0}
//           onSale
//         />
//         <Product
//           photo="https://i.ibb.co/f0mh2Fv/pink-shirt.png"
//           title="Printed Tshirt Coffee Black Color"
//           category="T-Shirts"
//           price={25.0}
//           originalPrice={35.0}
//           onSale
//         />
//         <Product
//           photo="https://i.ibb.co/4J4FzZ1/orange-shirt.png"
//           title="Typography Teal Printed Tshirt"
//           category="T-Shirts"
//           price={32.0}
//           originalPrice={34.0}
//           onSale
//         />
//       </div>
//     </div>
//   );
// }

// export default App;



import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    


      <header className="bg-white shadow p-4 text-2xl font-bold text-gray-800">
        <div className="max-w-6xl mx-auto">
          <span className="text-blue-600">amazon</span><span className="text-yellow-500">on</span>
        </div>
      </header>




      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 py-8">
          
          {/* ✅ Default Sorting */}
          <div className="flex justify-end mb-6">
            <select className="border px-3 py-2 rounded shadow-sm">
              <option>Default sorting</option>
            </select>
          </div>

          {/* ✅ Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Product
              photo="https://images.unsplash.com/photo-1579102230217-327a78d33a2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJsYWNrJTIwUHJpbnRlZCUyMENvZmZlZSUyME11Z3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              title="Black Printed Coffee Mug"
              category="Mugs"
              price={15.0}
            />
            <Product
              photo="https://images.unsplash.com/photo-1582832505469-69b19eec522e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=685"
              title="Father's Day Coffee Mug"
              category="Mugs"
              price={19.0}
            />
            <Product
              photo="https://images.unsplash.com/photo-1706550633982-6388c69002a0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JlZW4lMjBQcmludGVkJTIwVHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
              title="Green Printed Tshirt"
              category="T-Shirts"
              price={34.0}
            />
            <Product
              photo="https://images.unsplash.com/photo-1696431621200-9068cdb0a1bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026"
              title="Personalised Mug"
              category="Mugs"
              price={15.0}
            />
            <Product
              photo="https://images.unsplash.com/photo-1623860480761-b368abfb915a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFByaW50ZWQlMjBCcm93biUyMFRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              title="Printed Brown Tshirt"
              category="T-Shirts"
              price={25.0}
              originalPrice={34.0}
              onSale
            />
            <Product
              photo="https://images.unsplash.com/photo-1621951767587-b24334f11c65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fFByaW50ZWQlMjBEYXJrJTIwQmx1ZSUyMFRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              title="Printed Dark Blue Tshirt"
              category="T-Shirts"
              price={34.0}
            />
            <Product
              photo="https://images.unsplash.com/photo-1678625527288-5419ad0f624b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFByaW50ZWQlMjBHcmVlbiUyMFRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
              title="Printed Green Tshirt"
              category="T-Shirts"
              price={28.0}
              originalPrice={35.0}
              onSale
            />
            <Product
              photo="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHJpbnRlZCUyMFRzaGlydCUyMENvZmZlZSUyMEJsYWNrJTIwQ29sb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
              title="Printed Tshirt Coffee Black Color"
              category="T-Shirts"
              price={25.0}
              originalPrice={35.0}
              onSale
            />
            <Product
              photo="https://images.unsplash.com/photo-1704095371948-58d1f95d8064?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRlYWwlMjBQcmludGVkJTIwVHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
              title="Typography Teal Printed Tshirt"
              category="T-Shirts"
              price={32.0}
              originalPrice={34.0}
              onSale
            />
          </div>
        </div>
      </main>

   
   

      <footer className="bg-gray-600 border-t text-center text-gray-500 text-sm py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <p>Copyright © 2025 | CodeYogi</p>
          <p>Powered by CodeYogi</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
