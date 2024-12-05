import React from 'react'

const Features = () => {

    const features = [
        {
            id: 0,
            name: "Gratuite",
            description: "Un outil qui fournit toutes ses fonctions gratuitement"
        },
        {
            id: 1,
            name: "Interface Intuitive",
            description: "Une interface conviviale et facile à utiliser pour gérer vos tâches rapidement."
        },
        {
            id: 2,
            name: "Priorisation",
            description: "Définissez des priorités pour vos tâches les plus importantes."
        },
    ]

  return (
    <section className='bg-secondary py-10'>
        <div className='w-10/12 m-auto'>
            <div className='flex items-center gap-4'>
                <span className='w-20 h-[1px] bg-stone-700'></span>
                <h1 className='font-semibold text-slate-800 uppercase text-2xl'>Caractéristiques de notre service</h1>
            </div>
            <div className='flex items-start gap-6 mt-8 mb-10 flex-wrap'>
                {
                    features.map((feature, index) => (
                        <div key={feature.id} className={`flex w-[32%] items-center justify-between gap-6 bg-slate-100 p-4 py-7 rounded-full transition-all duration-200 hover:shadow-lg ${index % 2 !== 0 && "mt-24"}`}>
                            <div className='w-1/4 flex justify-center items-center'>
                                <div className='w-16 h-16 text-white bg-secondary rounded-full flex justify-center items-center'>
                                    <span className='font-bold text-2xl'>{feature.name[0]}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 w-3/4'>
                                <h2 className='font-semibold text-slate-600 text-xl'>{feature.name}</h2>
                                <p className='text-slate-400 text-[13px]'>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Features