import React from 'react';
import { Switch, Route } from 'react-router-dom'
import SignIn from './SignIn';
import SignOut from './SignOut';
import TodoList from './TodoList';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SignIn} />
      <Route path='/todo-list' component={TodoList} />
      <Route path='/sign-out' component={SignOut} />
    </Switch>
  </main>
)

export default Main;
