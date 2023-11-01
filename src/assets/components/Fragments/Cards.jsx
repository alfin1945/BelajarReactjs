import React from 'react'
import Card from '../Elements/Card/Card'
import { Link } from 'react-router-dom'

// Gambar
import icon from '../../img/huruf.png'

function Cards() {
    return (
        <div className=''>
            <div className='grid grid-cols-3 mx-72 gap-3'>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'> 
                    <div className='bg-yellow-600/100 rounded-lg w-60 shadow shadow-yellow-600'>
                        <img src={icon} alt="" className='p-12' />
                    </div>
                        <h2 className='text-xl text-center font-semibold '>Membaca</h2>
                </Link>
                <Link to="/Menulis" className='transition duration-500 hover:scale-105'>
                    <div className='bg-green-600/100 rounded-lg w-60 shadow shadow-green-600'>
                        <img src={icon} alt="" className='p-12' />
                    </div>
                    <h2 className='text-xl text-center font-semibold'>Menulis</h2>
                </Link>
                <Link to="/Menghitung" className='transition duration-500 hover:scale-105'>
                    <div className='bg-purple-600/100 rounded-lg w-60 shadow shadow-purple-600'>
                        <img src={icon} alt="" className='p-12' />
                    </div>
                    <h2 className='text-xl text-center font-semibold'>Menghitung</h2>
                </Link>
            </div>
        </div>
    )
}

export default Cards;