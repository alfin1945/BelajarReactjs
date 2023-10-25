import React from 'react'

function Button(props) {
    const {nama, warna, bg, hover} = props;

    return (
        <div className={`${bg} rounded-md text-center hover:${hover}`}>
            <button className={`px-4 py-2 font-semibold text-xl ${warna} `} type='submit'>{nama}</button>
        </div>
    )
}

export default Button;