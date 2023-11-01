import React from 'react'

function Modals({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className=
      {`fixed inset-0 transition-colors flex justify-center items-center ${open ? "visible bg-black/30" : "invisible"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className=
        {`bg-white rounded-xl shadow p-6 transition-all mt-14 ${open ? "scale-100 opacity-100" : "scale-x-125 opacity-0"}`}>
        <button
        onClick={onClose}
          className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 hover:text-gray-700'>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modals