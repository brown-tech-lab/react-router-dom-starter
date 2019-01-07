import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Demo02 extends Component {
  render() {
    return (
      <div className="pg2-container">
        <h1>Demo - 02</h1>
        <NavLink to="/">Back Home</NavLink>
      </div>
    );
  }
}
export default Demo02;
