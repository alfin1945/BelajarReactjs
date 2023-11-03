import React from 'react'
import Huruf from '../Fragments/Huruf'

// Gambar
import foto from "../../img/Gambar/1.jpg"
import foto2 from "../../img/Gambar/2.jpg"
import foto3 from "../../img/Gambar/3.jpg"
import foto4 from "../../img/Gambar/4.jpg"


const slides = [
    {
        gambar: foto,
        huruf: "A",
    },
    {
        gambar: foto2,
        huruf: "B",
    },
    {
        gambar: foto3,
        huruf: "C",
    },
    {
        gambar: foto4,
        huruf: "D",
    },
]

function HurufLayouts() {
    return (
        <div>
            <div className='flex justify-center '>
                <div className='max-w-lg '>
                    <Huruf>
                        {slides.map((s, i) => (
                            <img src={s.gambar} className="w-full rounded-xl" />
                        ))}
                    </Huruf>
                </div>
            </div>
        </div>
    )
}

export default HurufLayouts