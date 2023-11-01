import React from 'react'

import Gambar from '../img/papan.png';
import { Link } from 'react-router-dom'

function Awalpages() {
  return (
      <div className='m-14 mx-60'>
        <div className='absolute mt-32 mx-[80px] text-white text-center  items-center '>
          <p className='font-semibold text-xl text-yellow-300'>Selamat Datang</p>
          <h1 className='font-semibold text-5xl font-serif mt-2'>Kelas Belajar</h1>
          <p className='font-semibold text-3xl mt-4 font-mono uppercase'>"Calistung"</p>
          <div className='mt-16 mx-32 rounded-full bg-gradient-to-br shadow from-red-600 to-red-800 transition duration-300 hover:scale-110'>
            <button className='px-2 p-2 text-xl  font-sans font-semibold transition duration-300 hover:scale-110'><Link to="/Belajar">{">"}</Link></button>
          </div>
        </div>
        <img src={Gambar} alt="Gambar" className='w-full' />

      </div>
  )
}

export default Awalpages;