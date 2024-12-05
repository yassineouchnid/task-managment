import React from 'react'
import HeroImg from "../images/slider.png"
import { Link } from 'react-router-dom'
import { AiOutlineDoubleRight } from "react-icons/ai";
const HeroSection = () => {
  return (
    <section>
        <div className='flex justify-between items-center w-10/12 m-auto'>
            <div className='w-1/2'>
                <div className='flex items-center gap-4'>
                    <span className='w-14 h-[1px] bg-stone-700'></span>
                    <h3 className='text-slate-600'>Gestion des tâches</h3>
                </div>
                <h1 className='text-4xl text-slate-800 font-bold mb-3 mt-1 leading-relaxed'>Gérez vos tâches quotidiennes <span className='bg-primary text-white px-5 py-[1px] rotate-[-3deg] font-bold rounded-full'>Gratuitement</span> !</h1>
                <p className='text-slate-500 font-medium text-[12px] leading-relaxed'>Transformez votre routine quotidienne en une expérience organisée et productive grâce à notre outil gratuit de gestion des tâches. Planifiez vos activités, suivez vos progrès et atteignez vos objectifs avec une facilité déconcertante, tout en gardant le contrôle sur votre temps.</p>
                <div className='mt-6'>
                    <Link 
                        to='./ajouter-tache' 
                        className='bg-slate-400 relative p-3 px-7 pr-14 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:bg-slate-600'
                    >
                        Commencez gratuitement
                        <div className='absolute right-2 top-[6px] bg-white rounded-full p-2'>
                            <AiOutlineDoubleRight className='text-black' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 flex justify-end'>
                <img src={HeroImg} alt="Hero Section Image" className='' />
            </div>
        </div>
    </section>
  )
}

export default HeroSection