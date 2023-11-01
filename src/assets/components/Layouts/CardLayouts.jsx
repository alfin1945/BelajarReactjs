import React from 'react'
import Navbar from '../Elements/Navbar/Navbar'
import Cards from '../Fragments/Cards'

function CardLayouts(props) {

    const { title } = props;

    return (
        <div>
            <Navbar merk="Aplikasi Calistung" />
            <div className='mt-28'>
                <div className='text-center mb-10 font-extrabold'>
                    <h1 className='text-5xl text-black font-serif'>{title}</h1>
                    <p className='text-lg text-slate-950 font-serif mt-3'>Membaca - Menulis - Menghitung</p>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default CardLayouts