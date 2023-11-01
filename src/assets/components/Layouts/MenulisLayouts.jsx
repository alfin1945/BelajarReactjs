import React from 'react'
import Navbar from '../Elements/Navbar/Navbar'
import Menulis from '../Fragments/Menulis'

function MenulisLayouts(props) {

    const {title} = props;

    return (
        <div>
            <Navbar merk="Belajar Menulis" />
            <div className='mt-28'>
                <h1 className='text-4xl text-black mb-5 text-center font-semibold font-serif'>{title}</h1>
                <Menulis />
            </div>
    </div>
    )
}

export default MenulisLayouts;