import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Demo01 extends Component {
  render() {
    return (
      <div className="pg1-container">
        <h1>Demo - 01</h1>
        <NavLink to="/">Back Home</NavLink>
      </div>
    );
  }
}
export default Demo01;
