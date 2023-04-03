import { useState } from 'react'
import InputTodo from '@/components/InputTodo'
import TodoList from '@/components/TodoList'

import { todos as todosData } from '@/data/todoData'

function TodoApp() {
    const [todos, setTodos] = useState(todosData)
    return (
        <>
            <InputTodo />
            <TodoList todos={todos} setTodos={setTodos} />
        </>
    )
}

export default TodoApp