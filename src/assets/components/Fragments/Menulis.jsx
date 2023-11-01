import React from 'react'
import Card from '../Elements/Card/Card'
import {Link} from 'react-router-dom'

import icon from '../../img/huruf.png'

function Menulis() {
  return (
    <div>
        <div className='grid grid-cols-3 mx-72'>
                <Link to="/Membaca" >
                    <Card lern="Menulis Huruf" logo={icon} bg="bg-yellow-600/100" shadow="shadow-yellow-600/100" position="mx-14" />
                </Link>
                <Link to="/Membaca" >
                    <Card lern="Menulis Angka" logo={icon} bg="bg-yellow-600/100" shadow="shadow-yellow-600/100" position="mx-12" />
                </Link>
                <Link to="/Membaca" >
                    <Card lern="Menulis Percakapan" logo={icon} bg="bg-yellow-600/100" shadow="shadow-yellow-600/100" position="mx-8" />
                </Link>
            </div>
    </div>
  )
}

export default Menulis