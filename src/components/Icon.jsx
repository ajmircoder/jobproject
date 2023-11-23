import React from 'react'

export default function Icon({text, icon}) {
  return (
    <div className='rounded-lg bg-slate-200 px-2 text-center mb-1'><i className={`fas ${icon} `}></i><p style={{fontSize:"10px"}}>{text}</p></div>
  )
}
