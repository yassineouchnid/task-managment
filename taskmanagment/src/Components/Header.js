import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  const menu = [
    {
      title: 'Accueil',
      path: '/'
    },
    {
      title: 'Tâches',
      path: '/tache'
    },
    {
      title: 'Ajouter une tache',
      path: '/ajouter-tache'
    },
    {
      title: 'Contactez-nous',
      path: '/contact'
    },
  ]

  return (
    <header className='border-b border-slate-300'>
        <div className='bg-secondary p-3'>
            <p className='text-center font-semibold text-[13px] text-stone-800'>Outil de gestion de tâches gratuit</p>
        </div>
        <div className='flex items-center justify-between w-10/12 m-auto py-3'>
          <div>
            <img 
              src={logo}
              alt='logo'
              className='w-20'
            />
          </div>
          <nav className='flex items-center gap-12'>
            {
              menu.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className='text-sm font-bold text-stone-700 duration-200 transition-all hover:text-primary'
                >
                  {item.title}
                </Link>
              ))
            }
          </nav>
        </div>
    </header>
  )
}

export default Header