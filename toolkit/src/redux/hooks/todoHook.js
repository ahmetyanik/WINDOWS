import { useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addToDo, deleteToDo, getPosts } from "../reducers/todoReducer";

export function useToDo() {
  const dispatch = useDispatch();

  const { value,posts } = useSelector(({ todo }) => {
    return {
      value: todo.value,
      posts :todo.posts
    };
  }, shallowEqual);

  const boundAddToDo = useCallback(
    (...args) => dispatch(addToDo(...args)),
    [dispatch]
  );

  const boundDeleteToDo = useCallback(
    (...args) => dispatch(deleteToDo(...args)),
    [dispatch]
  );


  const boundGetPosts = useCallback(
    (...args) => dispatch(getPosts(...args)),
    [dispatch]
  );

  return {
    value,
    posts,
    addToDo: boundAddToDo,
    deleteToDo: boundDeleteToDo,
    getPosts:boundGetPosts
  };
}
