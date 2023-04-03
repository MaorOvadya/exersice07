import React from 'react'
import TodoItem from '@/components/TodoItem'

function TodoList({ todos, setTodos }) {

    const handleChange = (id) => {
        setTodos((prevState) => {
            return prevState.map(todo => {
                if(todo.id === id){
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
    <ul>
        {todos?.map((todo) =>
            <TodoItem key={todo.id} todoItem={todo} handleChange={handleChange} />
        )}
    </ul>
  )
}

export default TodoList