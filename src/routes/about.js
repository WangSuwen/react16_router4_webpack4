import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class AboutRout extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Route path="/about" render={(props) => <AsyncLoad compPath="@components/about" {...props} />} />
    );
  }
}