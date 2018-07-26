
import React from "react";
import { Router, Route } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'
const hashHistory = createHashHistory()

import App from '@components/app';
import Home from '@components/home/index';
import AboutRout from './about';
import TopicsRout from './topics';



export default class RootRouter extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
        <Router history={hashHistory}>
          <div>
            <Route path="/" component={App}/>
            <Route path="/" component={Home} exact/>
            <AboutRout />
            <TopicsRout />
            {/* 404 页面 配置有问题 */}
          </div>
        </Router>
    );
  }
}