import React from 'react'
import { useState } from 'react'
import Huruf from '../Fragments/Huruf'

// Gambar
import foto from "../../img/Gambar/1.jpg"
import foto2 from "../../img/Gambar/2.jpg"
import foto3 from "../../img/Gambar/3.jpg"
import foto4 from "../../img/Gambar/4.jpg"


const slides = [
    {
        // id:"A",
        id: 1,
        gambar: foto,
        huruf: "A",
    },
    {
        // id:"B",
        id: 2,
        gambar: foto2,
        huruf: "B",
    },
    {
        // id:"C",
        id: 3,
        gambar: foto3,
        huruf: "C",
    },
    {
        // id:"D",
        id: 4,
        gambar: foto4,
        huruf: "D",
    },
    {
        // id:"E",
        id: 5,
        gambar: foto,
        huruf: "E",
    },
    {
        // id:"F",
        id: 6,
        gambar: foto2,
        huruf: "F",
    },
    {
        // id:"G",
        id: 7,
        gambar: foto3,
        huruf: "G",
    },
    {
        // id:"H",
        id: 8,
        gambar: foto4,
        huruf: "H",
    },
    {
        // id:"I",
        id: 9,
        gambar: foto,
        huruf: "I",
    },
    {
        // id: "J",
        id: 10,
        gambar: foto2,
        huruf: "J",
    },
    {
        // id: "K",
        id: 11,
        gambar: foto3,
        huruf: "K",
    },
    {
        // id: "L",
        id: 12,
        gambar: foto4,
        huruf: "L",
    },
    {
        // id: "M",
        id: 13,
        gambar: foto,
        huruf: "M",
    },
    {
        // id: "N",
        id: 14,
        gambar: foto2,
        huruf: "N",
    },
    {
        // id: "O",
        id: 15,
        gambar: foto3,
        huruf: "O",
    },
    {
        // id: "P",
        id: 16,
        gambar: foto4,
        huruf: "P",
    },
    {
        // id: "Q",
        id: 17,
        gambar: foto4,
        huruf: "Q",
    },
    {
        // id: "R",
        id: 18,
        gambar: foto,
        huruf: "R",
    },
    {
        // id: "S",
        id: 19,
        gambar: foto2,
        huruf: "S",
    },
    {
        // id: "T",
        id: 20,
        gambar: foto3,
        huruf: "T",
    },
    {
        // id: "U",
        id: 21,
        gambar: foto4,
        huruf: "U",
    },
    {
        // id: "V",
        id: 22,
        gambar: foto4,
        huruf: "V",
    },
    {
        // id: "W",
        id: 23,
        gambar: foto,
        huruf: "W",
    },
    {
        // id: "X",
        id: 24,
        gambar: foto2,
        huruf: "X",
    },
    {
        // id: "Y",
        id: 25,
        gambar: foto3,
        huruf: "Y",
    },
    {
        // id: "Z",
        id: 26,
        gambar: foto4,
        huruf: "Z",
    },
]

function HurufLayouts() {

    const [curr, setCurr] = useState(0)

    return (
        <div className='flex  justify-center gap-2'>
            <div className='flex w-3/4  justify-center'>
                <div className='max-w-lg '>
                    <Huruf>
                        {slides.map((s, i) => (
                            <img src={s.gambar} className="w-full rounded-xl" />
                        ))}
                    </Huruf>
                </div>
            </div>
            <div className='w-1/2'>
                <div className=' bg-black/20 min-h-screen m-5 rounded-lg'>
                    <h1 className='uppercase font-semibold '>pilihan</h1>
                    {slides.map((s, i) => (
                        <button key={s.id} onClick={() => (
                            setCurr(i)
                        )} className={`transition-all m-3 font-semibold text-5xl p-5 rounded-lg bg-white ${curr === i ? "" : "bg-opacity-50"}`}>{s.huruf}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HurufLayouts