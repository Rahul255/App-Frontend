import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './auth/helper/PrivateRoutes';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashboard from './user/UserDashboard';




const Routers = () => {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} component={Home} />
                    <Route path='/signup' element={<Signup />} component={Signup}/>
                    <Route path='/signin' element={<Signin />} component={Signin} />
                    <Route
                    path="dashboard"
                    element={<PrivateRoute component={UserDashboard} />}
                />
                    
                </Routes>
            </Router>

        </div>
    )
}

export default Routers