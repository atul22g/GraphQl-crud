import React from "react";

const TodoTable = props => (
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.todo.length > 0 ? (
                
                props.todo.map(todo => (
                    
                    <tr key={todo.id}>
                        <td>{todo.Title}</td>
                        <td>{todo.Description}</td>
                        <td>
                            <button
                                className="button muted-button"
                                onClick={() => {
                                    props.editRow(todo);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="button muted-button"
                                onClick={() => props.deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No Todos</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default TodoTable;
