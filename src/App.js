
import Navigation from './Components/Navigation';
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import Home from './Components/page/Home';
import User from './Components/page/User';
import Cart from './Components/page/Cart';
import Product from './Components/page/Product';

function App() {
  return (
    <div>
      <Router>
      <Navigation/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/member" element={<User/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Product/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
