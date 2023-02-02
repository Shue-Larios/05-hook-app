// archivo padre

 
import { useTodos } from "../hook/useTodos"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
 
 


export const TodoApp = () => {

    const {todos,todosCount,pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodos();

    return (
        <>
            {/* <small> hace el tamaño del texto una talla más pequeña */}
            <h1>TodoApp: { todosCount }, <small> Pendientes: { pendingTodosCount } </small> </h1>

            <div className="row">

                <div className="col-7">
                    {/* TodoList */}
                    {/* aca le digo que mis todos (con este nombre lo uso en el TodoList) van hacer igual a los todos d este archivo */}
                    <TodoList 
                    todos={todos} 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                    />
                </div>

                <div className="col-5">

                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>


            </div>


        </>

    )
}
