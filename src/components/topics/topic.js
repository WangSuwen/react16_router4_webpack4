import React from "react";
import PropTypes from 'prop-types';

export default class Home extends React.Component{
  constructor() {
    super();
  }
  static propTypes = {
    match: PropTypes.object,
  };
  render() {
    return (
      <div>
        <h3>二级--{this.props.match.params.topicId}</h3>
      </div>
    );
  }
};
