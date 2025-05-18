import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import { Checkout } from './pages/Checkout/Checkout';
import { Sucess } from './pages/Sucess/Sucess';


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<Sucess />} />
        </Routes>
    </Router>
);

export default AppRoutes;