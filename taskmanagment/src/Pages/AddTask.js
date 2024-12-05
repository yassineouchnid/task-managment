import React, { useEffect, useState } from 'react'
import axios from "axios"
const AddTask = () => {
  const [name, setName] = useState("")
  const [priorite, setPriorite] = useState("")
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setError('')
    setSuccess("")
  }, [priorite, name])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (!name || !priorite) {
      setError("Tous les champs sont obligatoires")
      setLoading(false)
      return;
    }

    const parsedPriorite = parseInt(priorite, 10);
    if (isNaN(parsedPriorite) || parsedPriorite < 0 || parsedPriorite > 10) {
      setError("La valeur Priorité doit être un nombre compris entre 0 et 10 (1 - 3 : Faible | 3 - 6 : Moyen | 6 - 8 : Elevé | 8 - 10 : Très élevé)")
      setLoading(false)
      return
    }

    await axios.post("http://localhost:5000/", 
      { title: name, cost: parsedPriorite, status: "En attente" }
    ).then((res)=> {
      console.log(res)
      setSuccess("La tâche est ajouté avec success")
    }).catch((err)=> {
      setError("Une erreur est survenue lors de l'ajout de la tâche")
      console.error(err)
    })

    setName("")
    setPriorite("")
    setLoading(false)
    setError("")
  };

  return (
    <section className='w-10/12 m-auto py-16'>
      <h1 className='font-bold text-2xl text-stone-700'>Ajouter une Tâche</h1>
      <p className='text-sm text-stone-500'>Ici vous pouvez ajouter de nouvelles tâches</p>
      <div className='mt-12 w-9/12 m-auto'>
        <form onSubmit={(e)=> handleSubmit(e)} className=''>
          <div className='flex flex-col gap-2 mb-5'>
            <label htmlFor="task">Tâche <span className='text-red-700'>*</span> :</label>
            <input type="text" id="task" name="task" onChange={(e)=> setName(e.target.value)} value={name} placeholder='Nom de Tâche' className='border-b border-stone-500 p-2 px-4 outline-none' required />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="task">Priorite <span className='text-red-700'>*</span> :</label>
            <input type="text" id="priorite" name="priorite" onChange={(e)=> setPriorite(e.target.value)} value={priorite} placeholder='Priorite (1 - 3 : Faible | 3 - 6 : Moyen | 6 - 8 : Elevé | 8 - 10 : Très élevé)' className='border-b border-stone-500 p-2 px-4 outline-none' required />
          </div>
          {error && <p className='text-red-700 text-sm mt-7'>{error}</p>}
          {success && <p className='text-green-800 text-sm mt-7 font-semibold'>{success}</p>}
          <div className='mt-10 flex justify-end'>
            <button type='submit' className='p-3 px-10 bg-primary text-white text-sm font-bold transition-all duration-200 hover:bg-slate-600'>{loading? "En cour ..." : "Ajouter"}</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddTask