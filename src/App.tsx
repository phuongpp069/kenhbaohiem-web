import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Claims from "./pages/Claims";
import Lookup from "./pages/Lookup";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="san-pham" element={<Products />} />
          <Route path="chi-tiet-san-pham" element={<ProductDetail />} />
          <Route path="boi-thuong" element={<Claims />} />
          <Route path="tra-cuu" element={<Lookup />} />
          <Route path="cam-nang" element={<Blog />} />
          <Route path="gioi-thieu" element={<About />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
