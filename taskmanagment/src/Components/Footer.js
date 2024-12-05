import React from 'react'
import logo from "../images/logo.png"

const Footer = () => {
  return (
    <footer className='bg-white p-2 border-t border-slate-200'>
        <div className='flex justify-between items-center w-10/12 m-auto'>
          <div>
            <img src={logo} alt="Logo" className='w-12' />
          </div>
          <p className='font-medium text-[14px]'>Copyright © 2024 Yassine Tasks Managment.</p>
        </div>
    </footer>
  )
}

export default Footer