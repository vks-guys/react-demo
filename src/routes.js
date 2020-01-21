import React from 'react';
import { Switch, Route  } from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Index from './pages/index';

const createRoutes = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route path="/login" component={Login} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} /> */}
    </Switch>
)

export default createRoutes; 