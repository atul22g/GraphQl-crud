import React, { useEffect, useState } from "react";
import TodoTable from "./table/todoTable";
import EditTodoForm from "./forms/editTodoForm";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from "./gql";

const App = () => {
  // Mutations
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [createTodo] = useMutation(CREATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);
  // States
  const initialFormState = { id: null, Title: "", Description: "" };
  const [todos, setTodos] = useState({});
  const [editing, setEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(initialFormState);

  // Show the todo list
  const { data } = useQuery(GET_TODOS);

  useEffect(() => {
    if (data) {
      setTodos(data.allTodo);
    }
  }, [data]);



  const addTodo = todo => {
    todo.id = todos.length + 1;
    createTodo({variables: { title: todo.Title, description: todo.Description }});
    setTodos([...todos, todo]);
  };

  const deletetodo = id => {
    setEditing(false);
    setTodos(todos.filter(todo => todo.id !== id));
    deleteTodo({variables: { deleteTodoId: id }});
  };

  const editRow = todo => {
    setEditing(true);
    setCurrentTodo(todo);
  };

  const updateTodof = (id, updateTodof) => {
    setEditing(false);
    updateTodo({variables: {updateTodoId: id, title: updateTodof.Title, description: updateTodof.Description }});
    setTodos(todos.map(todo => (todo.id === id ? updateTodof : todo)));
    
  };

  return (
    <div className="container">
      <h1>CRUD App with GraphQL</h1>
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit Todo" : "Add Todo"}</h2>
            <EditTodoForm
              editing={editing}
              setEditing={setEditing}
              currentTodo={currentTodo}
              setCurrentTodo={setCurrentTodo}
              updateTodo={updateTodof}
              addTodo={addTodo}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <TodoTable todo={todos} editRow={editRow} deleteTodo={deletetodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
