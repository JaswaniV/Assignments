import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Product
        title="Black Printed Coffee Mug"
        price="15.00"
        photo="https://images.unsplash.com/photo-1691067973393-111799953d28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        description="Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame."
      />
    </div>
  );
}

export default App;
