import { use, useEffect, useState } from "react";
import { ProductsProvider, ProductsContext } from "./Context/ProductsContext";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="font-primary leading-normal">
      <ProductsProvider>
        <HomePage />
      </ProductsProvider>
    </div>
  );
}

export default App;
