import React, { Component } from "react";
import ToDo from "./components/ToDo";
import SignIn from "./components/SignIn";
import requireAuth from "./components/auth/requireAuth";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={SignIn} />
          <Route path="/todo-list" component={requireAuth(ToDo)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
