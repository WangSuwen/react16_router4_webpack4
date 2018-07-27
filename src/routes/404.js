import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class NotFoundRoute extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Route render={(props) => <AsyncLoad compPath="@components/404" {...props} />} />
    );
  }
}