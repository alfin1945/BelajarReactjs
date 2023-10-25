import React from 'react'


function AuthLayouts(props) {
    const { children, title } = props;
    return (
        <div className='flex min-h-screen items-center justify-center bg-slate-950 '>
            <div className="w-full max-w-xs ">
                <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
                <p className='font-medium text-slate-400 mb-5'>Selamat datang, Anj!</p>
                {children}
            </div>
        </div>
    )
}

export default AuthLayouts