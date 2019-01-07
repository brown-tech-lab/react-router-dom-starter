import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Features Implemented with React</h1>
        <ul>
          <li><NavLink to="/pg1">Demo Page 01</NavLink></li>
          <li><NavLink to="/pg2">Demo Page 02</NavLink></li>
        </ul>
      </div>
    );
  }
}
export default HomeContainer;
