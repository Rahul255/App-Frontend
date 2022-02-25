import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './core/Home';



const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path='/' element={<Home />}/>
                </Routes>
            </Router>
            
        </div>
    )
}

export default Routers