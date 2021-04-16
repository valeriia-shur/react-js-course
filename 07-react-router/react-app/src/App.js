import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.scss";
import About from "./About/About";
import Cars from "./Cars/Cars";
import CarDetail from "./CarDetail/CarDetail";

class App extends Component {
  state = {
    isLoggedIn: false,
  };
  render() {
    //console.log(this.props);
    return (
      <div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={styles.active}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName={styles.active}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{ pathname: "/cars" }}
                activeClassName={styles.active}
              >
                Cars
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <div style={{ textAlign: "center" }}>
          <h3>Is logged in {this.state.isLoggedIn ? "TRUE" : "FALSE"}</h3>
          <button onClick={() => this.setState({ isLoggedIn: true })}>
            Login
          </button>
        </div>
        <hr />

        {/* localhost:3000 */}
        <Switch>
          <Route path="/" exact render={() => <h1>Home page</h1>} />
          {this.state.isLoggedIn ? (
            <Route path="/about" component={About} />
          ) : null}

          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars} />
          <Redirect to={"/"} />
          {/*  <Route
            render={() => (
              <h1 style={{ color: "red", textAlign: "center" }}>
                404 not found
              </h1>
            )}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
