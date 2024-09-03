import React from 'react';

function Recommended() {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores nesciunt perferendis eaque harum ea reprehenderit aspernatur qui eum temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fuga facilis quam et inventore tempora dolorem qui distinctio? Illum accusamus perferendis, doloribus non esse ipsa architecto molestiae natus necessitatibus eveniet alias iusto tempora suscipit deleniti eligendi neque! Voluptate iusto fugit quibusdam, odio, dicta cupiditate rem voluptatum adipisci distinctio veniam necessitatibus ea exercitationem corrupti molestias facilis explicabo! Sapiente assumenda quibusda
      </div>
    </div>
  );
}

export default Recommended;
