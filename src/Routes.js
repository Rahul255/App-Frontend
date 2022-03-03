import React from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from './core/Home';
import Signup from './user/Signup';



const Routers = () => {
    
    return (
        <div>
            <Router>
                <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/signup' element={<Signup />}/>
                {/* <PrivateRoute path="user/dashboard" element={} />  */}
                </Routes>
            </Router>
            
        </div>
    )
}

export default Routers