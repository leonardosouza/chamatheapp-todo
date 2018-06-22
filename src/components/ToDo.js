import "./ToDo.css";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../actions";
import ToDoListItem from "./ToDoListItem";
import Preloader from "./Preloader";

class ToDo extends Component {
  state = {
    addFormValue: ""
  };

  handleInputChange = event => {
    this.setState({ addFormValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { addFormValue } = this.state;
    const { addToDo, auth } = this.props;
    event.preventDefault();
    addToDo({ title: addFormValue, priority: false }, auth.uid);
    this.setState({ addFormValue: "" });
  };

  renderAddForm = () => {
      const { addFormValue } = this.state;
      return (
        <form className="todo__form" onSubmit={this.handleFormSubmit}>
          <input type="text" placeholder="Add new todo!" value={addFormValue} onChange={this.handleInputChange} />
        </form>
      );
  };

  renderToDos() {
    let { data } = this.props;
    
    const toDos = _.map(data, (value, key) => {
      return <ToDoListItem key={key} todoId={key} todo={value} />;
    });

    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <p className="todo__remaining">Nothing to do here! You are super productive!</p>
    );
  }

  componentWillMount() {
    const { auth } = this.props;
    this.props.fetchToDos(auth.uid);
  }

  render() {
    if (this.props.data === "loading") {
      return (
        <div>
            <Preloader />
        </div>
      );
    }

    return (
      <Fragment>
        <div className="todo">
          {this.renderAddForm()}
          
          <ul className="todo__list">
            {this.renderToDos()}
          </ul>
        </div>

        <button className="signout" onClick={this.props.signOut}>Sair</button>
      </Fragment>
    );
  }
};

const mapStateToProps = ({ data, auth }) => {
  return {
    data,
    auth
  };
};

export default connect(mapStateToProps, actions)(ToDo);
