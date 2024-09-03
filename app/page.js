import LowerWidget from '@/components/LowerWidget'
import UpperWidget from '@/components/UpperWidget'
import React from 'react'

function page() {
  return (
<div className='bg-slate-900 w-screen h-screen flex flex-col lg:flex-row'>
  <div className='bg-slate-600 w-full lg:w-6/12 h-96 lg:h-auto m-5 lg:m-10 rounded-md'>
  </div>
  <div className='flex flex-col w-full lg:w-5/12 h-auto m-5 lg:m-10'>
    <div className="bg-slate-700 w-full lg:w-150 h-40 lg:h-3/6 rounded-md">
      <UpperWidget/>
    </div>
    <div className="bg-slate-700 w-full lg:w-150 h-40 lg:h-3/6 rounded-md mt-5 lg:mt-10">
      <LowerWidget/>
    </div>
  </div>
</div>

  )
}

export default page