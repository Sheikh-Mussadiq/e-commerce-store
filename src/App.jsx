import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductsPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="font-primary leading-normal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
