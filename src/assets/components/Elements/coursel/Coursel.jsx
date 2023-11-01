import React from 'react';
import { useState } from 'react';

import gambar from '../../../img/papan.png'
import gambar2 from '../../../img/angka.png'

function Coursel() {

    const foto = [
        {
            img: { gambar }
        },
        {
            img: { gambar2 }
        },
        {
            img: { gambar }
        },
    ];

    return (
        <div className='max-w-[1400px] h-[780px] w-full py-16 px-4 relative '>
            <div style={{ backgroundImage: `img(${foto[1].img})` }} className=' w-full h-full rounded-2xl bg-center bg-cover bg-yellow-600 duration-500 ' ></div>

            {/* Left Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full bg-black opacity-50'>
                <h1 className='text-2xl  text-white' >{`<`}</h1>
            </div>

            {/* Right Arrow */}
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full bg-black opacity-50'>
                <h1 className='text-2xl  text-white' >{`>`}</h1>
            </div>


        </div>
    )
}

export default Coursel
