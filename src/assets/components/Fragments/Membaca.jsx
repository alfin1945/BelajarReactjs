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
                    <Card lern="Mengenal Huruf" logo={icon} bg="bg-[#e29578]" shadow ="shadow-[#e29578]" position="mx-12" />
                </Link>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card lern="2 Suku Kata" logo={icon} bg="bg-[#4f772d]" shadow="shadow-[#4f772d]" position="mx-16" />
                </Link>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card lern="Percakapan" logo={icon} bg="bg-[#e63946]" shadow="shadow-[#e63946]" position="mx-16" />
                </Link>
                <Link to="/Membaca" className='transition duration-500  hover:scale-105'>
                    <Card lern="Bahasa Inggris" logo={icon} bg="bg-[#5f0f40]" shadow="shadow-[#5f0f40]" position="mx-14" />
                </Link>
            </div>
        </div>
    )
}

export default Membaca;