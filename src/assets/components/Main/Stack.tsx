import React, { useState } from 'react';
import { technologies } from '../dataType/StackType';
import { IoIosStar } from 'react-icons/io';


const Stack = () => {
  const [selectedTech, setSelectedTech] = useState([])

  const handleAdd = (technology) => {
  const alreadyAdded = selectedTech.some(
    (item) => item.name === technology.name
  );

  if (!alreadyAdded) {
    setSelectedTech([...selectedTech, technology]);
  }

  console.log(alreadyAdded);
};

 
  // console.log(technologies);
 
  return (
    <div className='container mx-auto'>
       <h2>Explore the Technologies</h2>
       
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
          return (
          <div
  key={technology.name}
  className="rounded-lg border border-gray-200 p-4"
>
  <div className="flex items-start justify-between">
  <div>
    <img
      src={technology.image}
      alt={technology.name}
      className="h-10 w-10"
    />

    <h3 className="mt-3 text-sm font-semibold text-gray-800">
      {technology.name}
    </h3>

    <p className="text-xs text-gray-500">
      {technology.category}
    </p>

    <p className="mt-3 text-xs leading-5 text-gray-500">
  {technology.description}
</p>
  </div>

  <span className="rounded-full bg-gray-100 px-2 py-1 text-[9px] text-gray-500">
    {technology.level}
  </span>
</div>

  <p className="text-xs text-gray-500 flex items-center gap-1">
    <span className='text-yellow-600 '><IoIosStar /></span> {technology.rating}
  </p>

  <button
  onClick={() => handleAdd(technology)}
  className="mt-4 w-full rounded-md bg-gray-900 py-2 text-xs text-white"
>
  Add to Stack
</button>
</div>
          )
        }

        )}
       </div>
    </div>
    
  );
};

export default Stack;