import React from 'react'

import Gambar from '../img/papan.png';
import {Link} from 'react-router-dom'

function Awalpages() {
  return (
    <div className='m-12 mx-60 '>
      <div className='absolute mt-32 mx-28 text-white text-center  items-center '>
        <p className='font-semibold text-3xl '>Selamat Datang</p>
        <h1 className='font-semibold text-7xl font-serif mt-4 '>Kelas Belajar</h1>
        <p className='font-semibold text-5xl mt-4 font-mono uppercase'>"Calistung"</p>
        <div className='mt-16 mx-32'>
          <button className='px-12 p-3 text-2xl rounded bg-gradient-to-br from-red-600 to-red-800 font-sans font-semibold'><Link to="/Belajar">Mulai Belajar</Link></button>
        </div>
      </div>
      <img src={Gambar} alt="Gambar" className='w-full' />

    </div>
  )
}

export default Awalpages;