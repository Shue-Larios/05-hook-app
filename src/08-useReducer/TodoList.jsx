// archivo hijo

import { TodoItem } from "./TodoItem"


export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

  // mandamos a llamar el handleDeleteTodo

  
 

  return (
    //    {/* TodoList */}
    <ul className="list-group">
      {
        // hacemos esto para q nos muestre tantos elementos como tenemos en el todo
        todos.map(todo => (
          <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDeleteTodo={ onDeleteTodo } 
          onToggleTodo= { onToggleTodo }
          />
        ))
      }
    </ul>
    // {/* fin Todo List */}
  )
}


