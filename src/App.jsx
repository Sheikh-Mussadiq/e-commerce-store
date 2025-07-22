import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductsPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="font-primary leading-normal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
