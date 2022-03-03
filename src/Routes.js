import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from './core/Home';



const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path='/' element={<Home />}/>
                {/* <PrivateRoute path="user/dashboard" element={} />  */}
                </Routes>
            </Router>
            
        </div>
    )
}

export default Routers