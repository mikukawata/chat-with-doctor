'use client';
import React, { FC } from 'react';

type Props = {
  handleSubmit: () => void;
  input: string;
  setInput: (value: string) => void;
};
const Input: FC<Props> = ({ handleSubmit, input, setInput }) => {
  return (
    <div className='w-4/5 fixed bottom-3 inset-x-0 mx-auto flex justify-center items-center gap-3'>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        type='text'
        className='inline-block w-4/5 p-2 text-gray-900 border border-gray-300 rounded-lg text-base focus:ring-blue-500 focus:border-blue-500'
      ></input>
      <button onClick={handleSubmit} className='text-base bg-red-400 py-2 px-4 rounded-md text-slate-50 cursor-pointer hover:bg-red-300'>
        送信
      </button>
    </div>
  );
};

export default Input;
