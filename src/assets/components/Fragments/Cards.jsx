import React from 'react'
import Card from '../Elements/Card/Card'
import icon from '../../img/papan.png'

function Cards() {
    const gambar = icon;
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mx-72'>
                <div>
                    <Card logo={gambar} title="Membaca" bg="bg-yellow-500" />
                </div>
                <Card logo="Logo Hitung" title="Menghitung" bg="bg-slate-300" />
                <Card logo="Logo Tulis" title="Menulis" bg="bg-blue-400" />
                <Card logo="Logo Hitung" title="Percakapan" bg="bg-slate-300" />
                <Card logo="Logo Inggris" title="Bahasa Inggris" bg="bg-red-400" />
                <Card logo="Logo Aplikasi" title="Tentang Aplikasi" bg="bg-green-400" />
            </div>
        </div>
    )
}

export default Cards