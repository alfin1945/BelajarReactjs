import { useState } from "react";
import { Link } from 'react-router-dom'
import Modals from "../../Fragments/Modals";

function Navbar(props) {

    const { merk } = props;
    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-transparent fixed w-full top-0  border-b-2 border-b-slate-300 shadow'>
            <div className='flex items-center px-24 justify-between'>
                <div>
                    <Link to='/'>
                        <div className=''>
                            <h1 className=' py-2 font-semibold text-lg'>
                                {merk}
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className=''>
                    <button onClick={() => setOpen(true)} className='py-[2px] rounded-full px-[10px]  border border-slate-600 font-semibold text-sm font-serif'>i</button>
                </div>
            </div>
            <Modals open={open} onClose={() => setOpen(false)} >
                <div className="mx-auto w-52">
                    <div className="my-2 w-48">
                        <h1 className="text-black">Calistung</h1>
                        <p>Singkatan dari kata baca tulis itung lorem kakndknaknkankdnalknl</p>
                    </div>
                </div>
            </Modals>
        </nav>
    )
}

export default Navbar