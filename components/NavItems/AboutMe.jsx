import React from 'react';

function AboutMe() {
  return (
    <div className="scrollable-section p-4 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
         style={{
           maxWidth: '100%',
           minHeight: '150px',
           color: '#D1D5DB', // text-gray-300 equivalent
           fontSize: '1rem', // base font size
           overflowY: 'auto',
           transition: 'transform 0.2s ease-in-out',
         }}>
      <div className='text-gray-300'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex magni quasi consequatur id quia labore quod corrupti harum optio illo reprehenderit doloribus, exercitationem fugiat ut quisquam dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quae? 
      </div>
    </div>
  );
}

export default AboutMe;
