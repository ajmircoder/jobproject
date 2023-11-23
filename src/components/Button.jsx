import React from 'react'
export default function Button({ text, icon, setComponent, selected }) {
  return (<>
    <main onClick={() => setComponent(text)} className={`${text == selected ? "bg-white" : ""} inline-block px-2 py-1 sm:px-5 sm:py-3 rounded-2xl md:rounded-full hover:bg-white`}>
      <span><i className={`fas ${icon} mx-1.5`}></i></span>
      <button >{text}</button></main>
  </>
  )
}
