import "./SignIn.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import PropTypes from "prop-types";

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/todo-list");
    }
  }

  render() {
    return (
      <div className="signin">
        <img alt="Chama" className="signin__logo" src="https://www.chama-app.com.br/img/header/logo-chama.png" />
        <h1 className="signin__header">Sign In to start</h1>
        <a href="#" className="signin__google" onClick={this.props.signIn}>Sign In With Google</a>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signIn })(Signin);
