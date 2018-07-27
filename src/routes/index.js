import React from "react";
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import RootRoute from './root';
import AboutRoute from './about';
import TopicsRoute from './topics';
import NotFoundRoute from './404';
import NotFoundPage from '@components/404';



export default class RootRouter extends React.Component {
  render() {
    return (
        <Router history={hashHistory}>
            <div>
              <Switch>
                <Route 
                  path="/"
                  render={(props) => 
                    <div>
                      <RootRoute {...props}/>
                      <AboutRoute {...props} />
                      <TopicsRoute {...props} />
                    </div>
                  }
                />
                {/* <NotFoundRoute /> */}
                <Route component={NotFoundPage}/>
              </Switch>
            </div>
        </Router>
    );
  }
}