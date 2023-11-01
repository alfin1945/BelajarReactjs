import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../Elements/Card/Card';

// Gambar
import icon from '../../img/huruf.png'

function Membaca() {
    return (
        <div>
            <div className='grid grid-cols-4 gap-3 mx-40'>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card lern="Mengenal Huruf" logo={icon} bg="bg-purple-600/100" shadow ="shadow-purple-600/100" />
                </Link>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card lern="2 Suku Kata" logo={icon} bg="bg-green-600/100" shadow="shadow-purple-600/100" />
                </Link>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card lern="Percakapan" logo={icon} bg="bg-orange-600/100" shadow="shadow-orange-600/100" />
                </Link>
                <Link to="/Membaca" className='transition duration-500  hover:scale-105'>
                    <Card lern="Bahasa Inggris" logo={icon} bg="bg-cyan-600/100" shadow="shadow-cyan-600/100" />
                </Link>
            </div>
        </div>
    )
}

export default Membaca;