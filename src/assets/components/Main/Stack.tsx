import React, { useState } from 'react';
import { technologies } from '../dataType/StackType';
import { IoIosStar } from 'react-icons/io';
import MyStack from '../MyStack/MyStack';


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
 const handleRemove = (name: string) => {
  const remainingTech = selectedTech.filter(
    (technology) => technology.name !== name
  );

  console.log(remainingTech);

  setSelectedTech(remainingTech);
};
const handleRemoveAll = () => {
   setSelectedTech([])
};

 
  // console.log(technologies);
 
  return (
    <div className='container mx-auto max-w-[1180px]'>
       <h2 className='font-bold text-4xl mb-3'>Explore the <span className='bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>Technologies</span> </h2>
       
     <div className='grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
            const isSelected = selectedTech.some(
    (item) => item.name === technology.name
  );
          return (
          <div
  key={technology.name}
 className={`rounded-lg border p-4 ${
  isSelected ? "border-green-500 bg-green-50" : "border-gray-200"
}`}
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

  <span className="rounded-full bg-blue-100 px-2 py-1 text-[9px] text-blue-500">
    {technology.level}
  </span>
</div>

  <p className="text-xs text-gray-500 flex items-center gap-1">
    <span className='text-yellow-600 '><IoIosStar /></span> {technology.rating}
  </p>

  <button disabled={isSelected}
  onClick={() => handleAdd(technology)}
  className="mt-4 w-full rounded-md bg-gray-900 py-2 text-xs text-white cursor-pointer"
>
  {isSelected ? "Added" : "Add to Stack"}
</button>
</div>
          )
        }

        )}
       </div>
        </div>
       <div>
      <MyStack selectedTech={selectedTech} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll} />
       </div>
     </div>
    </div>
    
    
  );
};

export default Stack;