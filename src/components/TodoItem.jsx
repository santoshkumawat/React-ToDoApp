import React from "react";

const TodoItem = () => {
    return (
        <li className="todo-item">
            <span className="">
                <input type="checkbox" />
                <span className="todo-text">Eat</span>
            </span>
            <p>...</p>
        </li>
    );
}

export default TodoItem;