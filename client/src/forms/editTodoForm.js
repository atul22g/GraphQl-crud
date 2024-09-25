import React, { useState, useEffect } from "react";

const EditTodoForm = props => {
    const initialFormState = { id: null, Title: "", Description: "" };
    const [todo, setTodo] = useState(
        props.editing ? props.currentTodo : initialFormState
    );

    const handleInputChange = event => {
        const { name, value } = event.target;

        setTodo({ ...todo, [name]: value });
    };

    useEffect(() => {
        setTodo(props.currentTodo);
    }, [props]);

    const resetAddTodo = () => {
        props.setEditing(false);
        setTodo(initialFormState);
        props.setCurrentTodo(initialFormState);
    };

    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!todo.Title || !todo.Description) return console.log("Pls Fill The Form");

                props.editing ? props.updateTodo(todo.id, todo) : props.addTodo(todo);
                resetAddTodo();
            }}
        >
            <label>Title</label>
            <input
                type="text"
                name="Title"
                value={todo.Title}
                onChange={handleInputChange}
            />
            <label>Description</label>
            <input
                type="text"
                name="Description"
                value={todo.Description}
                onChange={handleInputChange}
            />
            <button>{props.editing ? "Update Todo" : "Add Todo"}</button>
            {props.editing && (
                <button onClick={resetAddTodo} className="button muted-button">
                    Cancel
                </button>
            )}
        </form>
    );
};

export default EditTodoForm;
