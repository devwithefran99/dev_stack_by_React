import React from 'react';
import type { Technology } from '../dataType/StackType';
import { MdCancel } from 'react-icons/md';

interface MyStackProps {
  selectedTech: Technology[];
   handleRemove: (name: string) => void;
   handleRemoveAll: () => void;

}

const MyStack = ({ selectedTech ,  handleRemove,handleRemoveAll}: MyStackProps) => {
  return (
    <div>
      <h3>My Stack</h3>

      {selectedTech.map((technology) => {
        return (
         <div
  key={technology.name}
  className="mt-3 flex items-center justify-between rounded-lg border border-gray-200 p-3"
>
  <div className="flex items-center gap-3">
    <img
      src={technology.image}
      alt={technology.name}
      className="h-8 w-8"
    />

    <div>
      <p className="text-sm font-medium text-gray-800">
        {technology.name}
      </p>

      <p className="text-xs text-gray-500">
        {technology.category}
      </p>
    </div>
  </div>

  <button
    className="text-xl text-red-500"
    onClick={() => handleRemove(technology.name)}
  >
    <MdCancel />
  </button>
</div>

        );
      })}
       <button
  className="rounded bg-pink-600 px-4 py-2 text-[11px] text-white"
  onClick={() => handleRemoveAll()}
>
  Remove All
</button>
    </div>
   
  );
};

export default MyStack;