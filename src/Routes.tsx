import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/Home';
import { Checkout } from './pages/Checkout/Checkout';


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
);

export default AppRoutes;