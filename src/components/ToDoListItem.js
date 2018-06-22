import React, { Component } from "react";
import { connect } from "react-redux";
import { removeToDo, togglePriority } from "../actions";

class ToDoListItem extends Component {
  handleRemoveClick = todoId => {
    const { removeToDo, auth } = this.props;
    removeToDo(todoId, auth.uid);
  };

  handleTogglePriority = todoId => {
    const { todo, auth } = this.props;
    todo.priority = !todo.priority;
    togglePriority(todoId, todo, auth.uid);
  }

  render() {
    const { todoId, todo } = this.props;
    return (
      <li key="toDoName">
        <input type="checkbox" defaultChecked={todo.priority} id={`item${todoId}`} onChange={() => this.handleTogglePriority(todoId)} />
        <label className="toggle" htmlFor={`item${todoId}`}></label>
        <p>{todo.title}</p>
        <a onClick={() => this.handleRemoveClick(todoId)}>&#215;</a>
      </li>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps, { removeToDo, togglePriority })(ToDoListItem);
