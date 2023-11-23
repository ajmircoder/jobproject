import React from 'react'

export default function Image({img, text}) {
  return (
    <>
    <main className=' w-1/2 md:w-full inline-block rounded-md p-1 relative'>
    <p className='absolute bottom-1 right-1 bg-gray-200 px-3 py-1 rounded-xl'>Radha</p>
    <img className='rounded-xl '
    src={img} alt="" />
    </main>
    </>
  )
}
