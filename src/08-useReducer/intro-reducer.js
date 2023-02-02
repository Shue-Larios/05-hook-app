
// este es mi estado inicial va hacer como quiero que se encuentre mi aplicacion o algun segmento o algun modulo 
const initialSate = [
{
    id: 1,
    todo: "Recolectar la piedra del alma",
        done: false,
}
]


// esto puede ser un Reducer xk este no es mas que una funcion pura 
// este va a recibir dos argumentos
// 1. es el State como el estado inicial 
// 2. este siempre se le envia que es action es quien va a decirle al Reducer como quiero que cambie el estado
const todoReducer = ( state = initialSate, action ={}) => {

    // regresamos un nuevo estado
    if ( action.type ===  "[TODO] add todo") {
        return[...state, action.payload];
    }

// este es una de las condiciones del reducer siempre tiene que regresar un estado
return state;
}


let todos =  todoReducer();

// cuando nosotros queremos hacer una modificacion sl Reducer es mandarle una accion y esta le dice como modificarase
const newTodo = {
    id: 2,
    todo: "Recolectar la piedra del poder",
        done: false,
}

const addTodoAction = {
    // esta es la accion
type: "[TODO] add todo",
// esta es la carga que esta en la accion
payload: newTodo
}

// aca mando a llamar el estado actual y la accion q quiero
todos = todoReducer ( todos, addTodoAction )

console.log(todos);