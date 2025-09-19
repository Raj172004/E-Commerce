import React from 'react';

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border'>
      
      {/* Added 'p-4' for "breath" and changed w- and h- values to fit the card */}
      <div className='h-[16rem] w-full flex justify-center items-center p-4'> 
        <img 
          className='object-cover object-center w-full h-full' 
          src={product.imageUrl}
          alt="" 
        />
      </div>

      <div className='p-4'>
        <h3 className='text-lg fon-medium text-gray-900'>{product.brand}</h3>
        <p className='mt-2 text-5m text-gray-500'>{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;