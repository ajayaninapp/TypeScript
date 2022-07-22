import React from "react";
import { Todo } from "..//model";
import SingleTodo from "./singleTodo";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos?.map((todo) => (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos">
        <span className="todos_heading">Completed Tasks</span>
        {todos?.map((todo) => (
          <SingleTodo
            todos={todos}
            todo={todo}
            key={todo.id}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
