import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import PojedinacnaAkcija from './components/PojednacnaAkcija';
import PlaninarskeAkcije from './components/pages/PlaninarskeAkcije';
import Login from './components/pages/Login';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact Component={Home} />
                    <Route path='/planinarske_akcije' Component={PlaninarskeAkcije} />
                    <Route path='/products' Component={Products} />
                    <Route path='/sign-up' Component={SignUp} />
                    <Route path='/login' Component={Login} />
                    <Route path='/planinarska_akcija/:id' element={<PojedinacnaAkcija />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;


