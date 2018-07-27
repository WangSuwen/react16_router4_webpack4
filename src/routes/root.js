import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class RootRout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/" render={(props) => <AsyncLoad compPath="@components/app" {...props} />} />
        <Route path="/" exact render={(props) => <AsyncLoad compPath="@components/home/index" {...props} />} />
      </div>
    );
  }
}