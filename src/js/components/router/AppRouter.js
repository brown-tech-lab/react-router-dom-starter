import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES
import HomePage from '../pages/HomePage.jsx';
import Demo02 from '../pages/Demo02.jsx';
import Demo01 from '../pages/Demo01.jsx';

// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>           
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/pg2' component={Demo02} />
                <Route path='/pg1' component={Demo01} />
                <Redirect to="/" />
            </Switch>
        </Fragment>
    </BrowserRouter>
);