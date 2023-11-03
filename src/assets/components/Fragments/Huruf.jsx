import React from 'react'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'


function Huruf({ children: slides }) {

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))


    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            <div className='absolute flex inset-0 justify-between items-center p-4'>
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-500 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-500 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((s, i) => (
                        <div key={i}  >
                            <button onClick={() => (
                                setCurr(i)
                            )} className={`transition-all w-2 h-2 rounded-full bg-white ${curr === i ? "" : "bg-opacity-50"}`}></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Huruf