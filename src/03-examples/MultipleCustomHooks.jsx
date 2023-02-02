import { useCounter, useFetch } from "../hook";
import { LoadingQuote, Quote } from "./";


export const MultipleCustomHooks = () => {

  // const { Counter, increment, reset, decrement } = useCounter ();
  const { Counter, increment, decrement } = useCounter(1);



  const { State } = useFetch(`https://www.breakingbadapi.com/api/quotes/${Counter}`);


  const { data, isLoading, hasError } = State

  // aca dice (!!) si la data  tiene un valor (&&) entonces toma la data en la posicion cero es decir el primer elemento del arreglo
  // esto se conoce como doble negacion
  const { author, quote } = !!data && data[0];



  return (
    <>
      <h1>The Breaking Quotes</h1>
      <hr />

      {/* {
        // esta es la parte del if
        isLoading ? (
          <div className="alert alert-info text-center">
            Cargando...
          </div>
          // estos : son la parte del else
        ) : (
          <blockquote className="blockquote text-end">
            <p className="mb-1 "> {quote} </p>
            <footer className="blockquote-footer mt-2">{author}</footer>
          </blockquote>
        )
      } */}

      {/* forma mas corta del mismo codigo de arriba */}
      {
        isLoading
          // ? parte del if
          ? <LoadingQuote />
          // parte del else
          : <Quote author={ author } quote={ quote } />

      }


      <button
        className="btn btn-primary"
        // aca como isLoading trae un valor de true me va a ocultar el boton cuando sea false lo muestra
        disabled={isLoading}
        onClick={() => decrement()}>
        Anterior
      </button>

      <button
        className="btn btn-primary"
        // aca como isLoading trae un valor de true me va a ocultar el boton cuando sea false lo muestra
        disabled={isLoading}
        onClick={() => increment()}>
        Siguiente
      </button>







    </>
  )
}
