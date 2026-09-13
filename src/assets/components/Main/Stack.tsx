import  { useState } from 'react';
import { technologies, type Technology } from '../dataType/StackType';
import { IoIosStar } from 'react-icons/io';
import MyStack from '../MyStack/MyStack';
import { toast } from 'react-toastify';


const Stack = () => {
  const [selectedTech, setSelectedTech] =  useState<Technology[]>([]);

  const handleAdd = (technology : Technology) => {
  const alreadyAdded = selectedTech.some(
    (item) => item.id === technology.id
  );

  if (!alreadyAdded) {
    setSelectedTech([...selectedTech, technology]);
    toast.success(`${technology.name} added to stack!`);
  } else {
    toast.info(`${technology.name} already in stack`);
  }
 

  console.log(alreadyAdded);
};
 const handleRemove = (id: number) => {
  const techToRemove = selectedTech.find((technology) => technology.id === id);

  const remainingTech = selectedTech.filter(
    (technology) => technology.id !== id
  );
  // console.log(remainingTech)
  setSelectedTech(remainingTech);
  toast.error(`${techToRemove?.name} removed from stack`);
};
const handleRemoveAll = () => {
   setSelectedTech([])
    toast.warn('All technologies removed!');
};

 
  // console.log(technologies);
 
  return (
    <div className='container mx-auto max-w-295'>
       <h2 className='font-bold text-4xl mb-3'>Explore the <span className='bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>Technologies</span> </h2>
       
     <div className='grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologies.map((technology) => {
            const isSelected = selectedTech.some(
    (item) => item.name === technology.name
  );
          return (
          <div
  key={technology.id}
 className={`rounded-lg border p-4 ${
  isSelected ? "border-green-500 bg-green-50" : "border-gray-200"
}`}
>
  <div className="flex items-start justify-between">
  <div>
    <img src={technology.image} alt={technology.name} className="h-10 w-10" />

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