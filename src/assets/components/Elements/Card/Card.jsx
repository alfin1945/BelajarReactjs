import React from 'react'

function Card(props) {

    const {lern, logo, bg, shadow, position } = props;
    return (
        <div>
            <div className={`${bg} rounded-lg w-60 shadow ${shadow}`}>
                <img src={logo} alt="" className='p-12' />
            </div>
            <h2 className={`text-xl ${position} font-semibold`}>{lern}</h2>
        </div>
    )
}

export default Card