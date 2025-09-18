import React from 'react';

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="/image/image1.png" alt="" />
      </div>

      <div className='p-4'>
        <h3 className='text-lg fon-medium text-gray-900'>Nofilter</h3>
        <p className='mt-2 text-5m text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;