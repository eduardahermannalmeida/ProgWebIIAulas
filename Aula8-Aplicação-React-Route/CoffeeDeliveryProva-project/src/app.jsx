import { BrowserRouter, Routes, Route } from "react-router";
import { Checkout } from "./pages/checkout";
import { Home } from "./pages/home";
import { Header } from "./components/header";

export function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
