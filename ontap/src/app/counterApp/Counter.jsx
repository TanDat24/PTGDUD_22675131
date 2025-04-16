import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Giảm
        </button>
      </div>
      <div className="text-2xl font-bold text-gray-700">
        Giá trị: {count}
      </div>
    </div>
  );
}
