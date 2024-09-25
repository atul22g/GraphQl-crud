import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query AllTodo {
        allTodo {
          id
          Title
          Description
        }
    }`;

export const CREATE_TODO = gql`
  mutation CreateTodo($title: String!, $description: String) {
    createTodo(
      Title: $title, 
      Description: $description
    )
  }`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($updateTodoId: Int, $title: String, $description: String) {
    updateTodo(
      id: $updateTodoId,
      Title: $title, 
      Description: $description
    )
  }`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($deleteTodoId: Int) {
    deleteTodo(id: $deleteTodoId)
  }`;