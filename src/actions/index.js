import { todosRef, authRef, provider } from "../config/firebase";
import { FETCH_TODOS, FETCH_USER } from "./types";

export const signIn = () => dispatch => {
  authRef
    .signInWithPopup(provider)
    .then(result => {})
    .catch(error => { console.log(error); });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => { })
    .catch(error => { console.log(error); });
};

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const addToDo = (newToDo, uid) => async dispatch => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo);
};

export const togglePriority = (toggleToDoId, toDo, uid) => {
  todosRef
    .child(uid)
    .child(toggleToDoId)
    .update(toDo);
};

export const removeToDo = (removeToDoId, uid) => async dispatch => {
  todosRef
    .child(uid)
    .child(removeToDoId)
    .remove();
};

export const fetchToDos = uid => async dispatch => {
  todosRef.child(uid).on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};
