import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import Databases from './pages/Databases';
import Queries from './pages/Queries';
import Tasks from './pages/Tasks';
import Query from './pages/Query';
import Company from './pages/Company';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/tasks">
                <Tasks />
            </Route>
            <Route exact path="/queries">
                <Queries />
            </Route>
            <Route exact path="/query/new">
                <Query />
            </Route>
            <Route exact path="/query/:id">
                <Query />
            </Route>
            <Route exact path="/databases">
                <Databases />
            </Route>
            <Route exact path="/company">
                <Company />
            </Route>
        </Switch>
    );
};

export default Routes;
