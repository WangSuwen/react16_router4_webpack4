import React from "react";
import { Route } from 'react-router';
import AsyncLoad from './asyncLoad';
// import About from '@components/about/about';

export default class AboutRout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/about" render={() => <AsyncLoad compPath="@components/about" />}/>
        {/* <Route path="/about" component={About}/> */}
        {/* <Route path="/about" component={AsyncLoad} /> */}
      </div>
    );
  }
}