import React from 'react'

function Card(props) {

    const {logo, title, bg} = props;
    return (
        <div>
            <div className={`${bg} h-72 rounded`}>
                <h1 className='text-white font-semibold text-5xl text-center pt-10'>{logo}</h1>
                <p className='pt-32 text-center font-semibold text-3xl'>{title}</p>
            </div>
        </div>
    )
}

export default Card