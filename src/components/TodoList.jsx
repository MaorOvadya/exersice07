import React from 'react'
import TodoItem from '@/components/TodoItem'
import { useState } from 'react'
import { todos as todosData } from '@/data/todoData'


function TodoList({ deleteTodo }) {

    const [todos, setTodos] = useState(todosData)

    const handleChange = (id) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }

                return todo
            })
        })
    }

    return (
        <ul
            todos={todos}
            handleChange={handleChange}
        >
            {todos?.map((todo) =>
                <TodoItem
                    key={todo.id}
                    todoItem={todo}
                    handleChange={handleChange}
                    deleteTodo={deleteTodo}
                />
            )}
        </ul>
    )
}

export default TodoList