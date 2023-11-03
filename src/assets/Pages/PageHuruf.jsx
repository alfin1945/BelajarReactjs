import React from 'react'
import Navbar from '../components/Elements/Navbar/Navbar'
import HurufLayouts from '../components/Layouts/HurufLayouts'

function PageHuruf() {
    return (
        <div>
            <Navbar merk="Belajar wh" className="absolute" />
            <div className='text-center  mt-20'>
                <h1 className='text-4xl font-semibold mb-5'>Mengenal Huruf</h1>
                <HurufLayouts />
            </div>
        </div>
    )
}

export default PageHuruf