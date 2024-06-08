import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './view/navBar/NavBar';
import Footer from './view/footer/Footer';
import MainContent from './view/mainContent/MainContent';
import About from './view/About/About';
import Service from './view/services/Service';
import Booking from './view/booking/Booking';
import Cart from './view/cart/Cart';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" Component={MainContent} />
          <Route path="/cart" Component={Cart} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Service} />
          <Route path="/booking" Component={Booking} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
