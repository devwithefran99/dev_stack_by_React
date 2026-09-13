import React from 'react';
import type { Technology } from '../dataType/StackType';
import { MdCancel } from 'react-icons/md';
import { FaRegTrashAlt } from 'react-icons/fa';

interface MyStackProps {
  selectedTech: Technology[];
   handleRemove: (name: string) => void;
   handleRemoveAll: () => void;

}

const MyStack = ({ selectedTech ,  handleRemove,handleRemoveAll}: MyStackProps) => {
  return (
    <div  className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-gray-800">
    My Stack
  </h3>
  <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
    {selectedTech.length} Selected
  </span>

     {selectedTech.length === 0 ? (
  <p className="mt-4 text-sm text-gray-500">
    Your stack is empty.
  </p>
) : (
  selectedTech.map((technology) => {
    return (
      <div
        key={technology.name}
        className="mt-3 flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-3"
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
  })
)}
       {selectedTech.length > 0 && (
  <button
    className="mt-4 flex justify-center items-center rounded-lg border border-orange-600 p-2.5 font-bold text-orange-600 w-full mx-auto"
    onClick={() => handleRemoveAll()}
  >
   <FaRegTrashAlt /> Remove All
  </button>
)}
    </div>
   
  );
};

export default MyStack;