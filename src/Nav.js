import React from "react";
import Chartpage from "./Covidchart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = props => {
  const navdata = props.navchartprops;
  //console.log(navdata)

  return (
    <Router>
      <div className="container">
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label for="nav" className="nav-btn">
            <i />
            <i />
          </label>
          <div className="logo"> </div>
          <div className="nav-wrapper">
            <ul>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link to="/chart">chart</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/chart">
          <Chartpage chartprops={navdata} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Nav;
