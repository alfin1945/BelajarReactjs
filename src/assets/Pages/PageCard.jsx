import React from 'react'

const cards = [
    {
        id: 1,
        logo: "Logo",
        name: "Membaca"
    },
    {
        id: 2,
        logo: "Logo",
        name: "Menghitung"
    },
    {
        id: 3,
        logo: "Logo",
        name: "Menulis"
    },
    {
        id: 4,
        logo: "Logo",
        name: "Percakapan"
    },
    {
        id: 5,
        logo: "Logo",
        name: "Bahasa Inggris"
    },
    {
        id: 6,
        logo: "Logo",
        name: "Tentang Aplikasi",
        bg: "bg-white"
    },
]

const PageCard = () => {
    return (
        <div className=' bg-white min-h-screen'>
            <div className='mt-20'>
                <div className='text-center'>
                    <h1 className='text-blue-950 text-5xl font-semibold'>Mau Belajar Apa?</h1>
                </div>
                <div className='mt-10 mb-5'>
                    <div className='grid grid-cols-3 text-center items-center mx-72'>
                        {cards.map((card) => (
                            <div className='bg-slate-500 w-80 h-80 rounded m-5'>
                                <h1 className='text-white font-semibold text-5xl text-center pt-16'>{card.logo}</h1>
                                <p className='mt-28 font-semibold text-2xl'>{card.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageCard