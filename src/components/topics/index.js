import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default class Home extends React.Component{
  constructor() {
    super();
  }
  static propTypes = {
    match: PropTypes.object,
  };
  render() {
    const _match = this.props.match;
    return (
      <div>
        <h2>一级--Topics1123</h2>
        <ul>
          <li>
            <Link to={`${_match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${_match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${_match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <hr/>
      </div>
    );
  }
};
