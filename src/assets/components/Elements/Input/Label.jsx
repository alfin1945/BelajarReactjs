import React from 'react'

function Label(props) {

    const {htmlFor, children} = props;
  return (
        <label htmlFor={htmlFor} className="block text-slate-800 mb-2 text-sm font-semibold">{children}</label>
  )
}

export default Label;