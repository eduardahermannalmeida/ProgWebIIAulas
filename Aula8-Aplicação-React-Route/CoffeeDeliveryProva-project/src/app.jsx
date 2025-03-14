import { BrowserRouter, Routes, Route } from "react-router";
import { Checkout } from "./pages/checkout";
import { Home } from "./pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
