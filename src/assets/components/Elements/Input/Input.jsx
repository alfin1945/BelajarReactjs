import React from 'react'

function Input(props){

    const {type, placeholder, name} = props;
  return (
    <input type={type} className='text-sm text-slate-600 px-4 py-2 w-full border border-slate-400 rounded' placeholder={placeholder} name={name} />
  )
}

export default Input;