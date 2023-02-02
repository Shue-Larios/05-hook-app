import { useFrom } from "../hook/useFrom"

export const TodoAdd = ({ onNewTodo }) => {

    // para manejar el formulario usamoe el custonHook q hicimos UseForm

    const { description, onInputChange, onResetForm } = useFrom({
        description: "",
    })

    // evitar el posteo del formulario (al dar enter no funcione)
    const onFormSubmit = (event) => {
        event.preventDefault();// hacemos la prevencion del formulario

        // verificamos si tenemos un valor en la description
        if (description.length <= 1) return;


        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }
        // estos mandando newTodo x esa funcion o argumento
        onNewTodo(newTodo);
        // para reiniciar la caja de texto despues de enviar
        onResetForm();
    }



    return (

        //  {/* TodoAdd onNewTodo( todo ) */}
        //             {/* id:, description, done */}
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder="Que hay que hacer"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
        // {/* fin TodoAdd */}


    )
}
