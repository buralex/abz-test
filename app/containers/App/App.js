/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import './style.scss';

const App = () => (
    <div className="app-wrapper">
        <Helmet
            titleTemplate="Denteez"
            defaultTitle="Denteez"
        >
            <meta name="description" content="Denteez" />
        </Helmet>

        <Header />

        <div className="container-fluid content">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/features" component={FeaturePage} />
                <Route path="" component={NotFoundPage} />
            </Switch>
        </div>

        <Footer />
    </div>
);

export default App;
