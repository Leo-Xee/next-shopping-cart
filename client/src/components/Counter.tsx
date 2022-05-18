import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { decrement, increment } from "@/app/features/counter/counterSlice";

function Counter() {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button type="button" onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
