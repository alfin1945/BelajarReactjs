import React from 'react'
import Navbar from '../Elements/Navbar/Navbar';
import Membaca from '../Fragments/Membaca';

function MembacaLayout(props) {

const {title} = props;

    return (
        <div>
            <Navbar merk="Belajar Membaca" />
            <div className='mt-28'>
                <h1 className='text-4xl text-black mb-10 text-center font-semibold font-serif'>{title}</h1>
                <Membaca />
            </div>
        </div>
    )
}

export default MembacaLayout;