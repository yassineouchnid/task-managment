import React from 'react'

const Contact = () => {
  return (
    <div className='py-12 w-10/12 m-auto'>
      <h1 className='font-bold text-2xl text-stone-700'>Contactez-nous</h1>
      <p className='text-sm text-stone-500'>Voici le centre de soutien si vous avez besoin d’aide.</p>
      <div className='mt-12 w-8/12 m-auto'>
        <form>
          <div className='flex flex-col gap-3 mb-8'>
            <label htmlFor="name">Nom complet <span className='text-red-700'>*</span> :</label>
            <input type="text" id="name" name="name" placeholder='Yassine OUCHNID' className='border-b border-stone-500 p-2 px-4 outline-none' required />
          </div>
          <div className='flex items-center gap-12'>
            <div className='flex flex-col gap-3 mb-8 w-1/2'>
              <label htmlFor="mail">Email :</label>
              <input type="mail" id="mail" name="mail" placeholder='yassineouchnid@gmail.com' className='border-b border-stone-500 p-2 px-4 outline-none' required />
            </div>
            <div className='flex flex-col gap-3 mb-8 w-1/2'>
              <label htmlFor="tel">Numéro de téléphone <span className='text-red-700'>*</span> :</label>
              <input type="text" id="tel" name="tel" placeholder='(+212) 666-66666' className='border-b border-stone-500 p-2 px-4 outline-none' required />
            </div>
          </div>
          <div className='flex flex-col gap-3 mb-8'>
            <label htmlFor="objectif">Objectif <span className='text-red-700'>*</span> :</label>
            <input type="text" id="objectif" name="objectif" placeholder='Creation de site web' className='border-b border-stone-500 p-2 px-4 outline-none' required />
          </div>
          <div className='flex flex-col gap-3 mb-8'>
            <label htmlFor="Message">Message <span className='text-red-700'>*</span> :</label>
            <textarea id="Message" name="Message" placeholder='Creation de site web' className='border-b border-stone-500 h-28 p-2 px-4 outline-none' required></textarea>
          </div>
          <div className='mt-10 flex justify-end'>
            <button type='submit' className='p-3 px-10 bg-primary text-white text-sm font-bold transition-all duration-200 hover:bg-slate-600'>Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact