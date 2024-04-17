import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button
        aria-label="Decrement value by Amount"
        onClick={() => {
          dispatch(decrementByAmount(10));
        }}
      >
        DecrementBy 10
      </button>
      &nbsp;
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      &nbsp;
      <span>{count}</span>
      &nbsp;
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      &nbsp;
      <button
        aria-label="Increment value by Amount"
        onClick={() => {
          dispatch(incrementByAmount(10));
        }}
      >
        IncrementBy 10
      </button>
    </>
  );
}
