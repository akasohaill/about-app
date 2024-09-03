'use client'

import React, { useState } from 'react';

function LowerWidget() {
  const [images, setImages] = useState([
    "https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__"
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className='flex flex-row p-3'>
      <div className='flex flex-col'>
        <div className='w-6 h-6 text-center border-2 rounded-full text-gray-400 border-gray-400'>
          ?
        </div>
        <div className='mt-20'>
          <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
            <rect x="10.6878" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
            <rect y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
            <rect x="10.6878" y="10.6879" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
            <rect y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
            <rect x="10.6878" y="21.3756" width="9.31217" height="9.31217" rx="1.16402" fill="#4A4E54" />
          </svg>
        </div>
      </div>
      <div className='flex flex-col ml-4'>
        <div className='flex flex-row gap-5 items-center'>
          <div className='flex w-20 h-10 rounded-xl bg-black text-white text-center items-center justify-center p-5 md:p-3 transition-transform transform hover:scale-105 hover:shadow-2xl shadow-lg'>
            Gallery
          </div>
          <label className='ml-20 w-40 h-10 rounded-xl flex items-center justify-center bg-gray-900 text-white p-5 md:p-3 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl shadow-lg'>
            + Add Image
            <input type="file" accept="image/*" className='hidden' onChange={handleImageUpload} />
          </label>
          <div className='flex items-center justify-center w-9 h-9 text-center border-2 rounded-full text-white bg-black border-none cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl shadow-lg' onClick={handlePrevImage}>
            ←
          </div>
          <div className='flex items-center justify-center w-9 h-9 text-center border-2 rounded-full text-white bg-black border-none cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl shadow-lg' onClick={handleNextImage}>
            →
          </div>
        </div>
        <div className="flex mt-10 overflow-x-auto">
          <div className='flex flex-row gap-5'>
            {images.length > 0 && images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`uploaded ${index}`}
                className={`h-40 rounded-lg ${index === currentImageIndex ? 'border-2 border-blue-500' : ''} md:h-30 md:w-120 transition-transform transform hover:scale-95 hover:shadow-2xl`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default LowerWidget;
