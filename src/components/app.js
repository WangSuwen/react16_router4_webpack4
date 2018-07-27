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
            <Link to="/" replace>Home1</Link>
          </li>
          <li>
            <Link to="/about" replace>About</Link>
          </li>
          <li>
            <Link to="/topics" replace>Topics</Link>
          </li>
          <li>
            <Link to="/404" replace>404</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }
};