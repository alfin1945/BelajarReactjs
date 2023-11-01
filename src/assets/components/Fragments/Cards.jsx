import React from 'react'
import Card from '../Elements/Card/Card'
import { Link } from 'react-router-dom'

// Gambar
import icon from '../../img/huruf.png'
import icon2 from '../../img/nulis.png'
import icon3 from '../../img/angka.png'

function Cards() {
    return (
        <div className=''>
            <div className='grid grid-cols-3 mx-72 gap-5'>
                <Link to="/Membaca" className='transition duration-500 hover:scale-105'>
                    <Card logo={icon} lern="Membaca" bg="bg-[#f35b04]" shadow="shadow-[#f35b04]" position="mx-20" />
                </Link>
                <Link to="/Menulis" className='transition duration-500 hover:scale-105'>
                    <Card logo={icon2} lern="Menulis" bg="bg-[#008000]" shadow="shadow-[#008000]" position="mx-20" />
                </Link>
                <Link to="/Menghitung" className='transition duration-500 hover:scale-105'>
                    <Card logo={icon3} lern="Menghitung" bg="bg-[#231942]" shadow="shadow-[#231942]" position="mx-16" />
                </Link>
            </div>
        </div>
    )
}

export default Cards;