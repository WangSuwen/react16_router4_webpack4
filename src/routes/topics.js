import React from "react";
import { Route } from 'react-router';

import Topics from '@components/topics';
import Topic from '@components/topics/topic';


export default class TopicsRout extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Route path="/topics" component={Topics} />
        <Route path="/topics" exact render={() => <h3>二级--Please select a topic.</h3>} />
        <Route path="/topics/:topicId" component={Topic} />
      </div>
    );
  }
}