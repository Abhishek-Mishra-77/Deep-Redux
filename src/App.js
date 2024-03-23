import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AddTodo from "./components/Todo/AddTodo";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import NoPageFound from "./components/NoPageFound/NoPageFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<AddTodo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
