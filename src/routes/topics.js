import React from "react";
import { Route } from 'react-router-dom';
import AsyncLoad from './asyncLoad';

export default class TopicsRout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/topics" render={(props) => <AsyncLoad compPath="@components/topics" {...props} />} />
        <Route path="/topics" exact render={() => <h3>二级--Please select a topic.</h3>} />
        <Route path="/topics/:topicId" exact render={(props) => <AsyncLoad compPath="@components/topics/topic" {...props} />} />
      </div>
    );
  }
}