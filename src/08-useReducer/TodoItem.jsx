// archivo nieto
export const TodoItem = ( {todo,onDeleteTodo, onToggleTodo } ) => {

    
  return (
    // TodoItem ...
          // d-flex : para crear un contenedor flexible, transformando elementos hijos directos en elementos flexibles. 
          <li  className="list-group-item d-flex justify-content-between">
            {/* para agregar una clase de forma condicional */}
            {/* ${ todo.done &&  } dice si todo.done es true agrega una clase sino lo deja en blanco */}
              <span className={`align-self-center ${ todo.done ? 'text-decoration-line-through' : "" } `}
              // lo ponemos asi () => onToggleTodo (todo.id)  para decirle al evento onClick q no me importa nada d el
              onClick={ () => onToggleTodo (todo.id) }>
                 {todo.description} </span>
              <button
              onClick= { ()=> onDeleteTodo(todo.id) }
              className="btn btn-outline-danger">Borrar</button>
          </li>
  )
}
