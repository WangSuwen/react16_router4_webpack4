import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home1</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
};