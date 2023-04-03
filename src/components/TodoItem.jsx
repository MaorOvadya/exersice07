import React from 'react'

function TodoItem({ todoItem, handleChange }) {

    return (
        <li>
            <input
                type="checkbox"
                checked={todoItem.completed}
                onChange={() => handleChange(todoItem.id)}
            />
            <span>
                {todoItem.title}
            </span>
        </li>
    )
}

export default TodoItem