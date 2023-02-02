import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

    const { Counter, increment, reset, decrement } = useCounter ();

// const value = 5;

  return (
    <>
    <h1>Counter With Custom Hook: {Counter} </h1>
<hr />
    <button className="btn btn-success" onClick={ () =>increment(5)}>+1</button>
    <button className="btn btn-danger" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={ () => decrement(5)}>-1</button>
    </>
  )
}
