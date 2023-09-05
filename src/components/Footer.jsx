import React from 'react'
import smile from "../assets/smile.svg";


const Footer = () => {
    return (
        <footer className='absolute p-2 bottom-2 left-2/4 w-[400px] '>
            <div className="footer">
                <div className="top flex items-center ">
                    <h2 className='text-xl text-stone-700 leading-6 '>search</h2>
                    <span className='text-[12px]' >&copy; 2023  </span>
                </div>
                <div className="bottom text-sm text-stone-600 tracking-wide">
                    <p className='flex items-center  '>made by -
                        <a href="#" target='_blank' className='hover:underline ml-1 ' >enos (lyznne) </a>
                        <img src={smile} alt="" className='ml-3' />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;