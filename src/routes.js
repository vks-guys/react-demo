import React from 'react';
import { Switch, Route  } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.component';
import Index from './pages/index/index.component';

const createRoutes = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
)

export default createRoutes; 