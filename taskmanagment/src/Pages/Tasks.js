import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import axios from 'axios';

/*
Faible 1-3
moyen 3-6
eleve 6-8
tres eleve 8-10
*/

const Tasks = () => {
  const tasks = useTasks()
  const [tasksData, settasksData] = useState(useTasks())
  const [dropdownIndex, setDropdownIndex] = useState(-1)

  useEffect(() => {
    settasksData(tasks)
  }, [tasks])

  const reloadTasks = () => {
    settasksData(tasks);
  };

  const [priorite, setPriorite] = useState('tout')
  const [statu, setStatu] = useState('tout')

  const status = [
    { value: "En attente", label: "En attente" },
    { value: "En cours", label: "En cours" },
    { value: "Terminée", label: "Terminée" },    
  ]

  const handleFilter = (type, value) => {
    if (type === "priorite") {
      if (value === "tout") {
        // Handle "tout" priority filter with the current statu value
        const statuValue = statu === "tout" ? true : statu;
        settasksData(tasks.filter((t) => (statuValue === true ? true : t.status === statuValue)));
      } else {
        // Filter by priority with the current statu value
        settasksData(
          tasks.filter((t) => {
            const isPriorityMatch =
              value === "Faible" ? t.cost <= 3 :
              value === "Moyen" ? t.cost > 3 && t.cost <= 6 :
              value === "Elevé" ? t.cost > 6 && t.cost <= 8 :
              value === "Très élevé" ? t.cost > 8 && t.cost <= 10 :
              true;
  
            return isPriorityMatch && (statu === "tout" ? true : t.status === statu);
          })
        );
      }
      setPriorite(value);
    } else if (type === "statu") {
      if (value === "tout") {
        // Handle "tout" statu filter with the current priorite value
        settasksData(
          tasks.filter((t) => {
            const isPriorityMatch =
              priorite === "Faible" ? t.cost <= 3 :
              priorite === "Moyen" ? t.cost > 3 && t.cost <= 6 :
              priorite === "Elevé" ? t.cost > 6 && t.cost <= 8 :
              priorite === "Très élevé" ? t.cost > 8 && t.cost <= 10 :
              true;
  
            return isPriorityMatch;
          })
        );
      } else {
        // Filter by statu with the current priorite value
        settasksData(
          tasks.filter((t) => {
            const isStatusMatch = t.status === value;
            const isPriorityMatch =
              priorite === "Faible" ? t.cost <= 3 :
              priorite === "Moyen" ? t.cost > 3 && t.cost <= 6 :
              priorite === "Elevé" ? t.cost > 6 && t.cost <= 8 :
              priorite === "Très élevé" ? t.cost > 8 && t.cost <= 10 :
              true;
  
            return isStatusMatch && isPriorityMatch;
          })
        );
      }
      setStatu(value);
    }
  };
  
  const updateTask = async (id, statu)=> {
    setDropdownIndex(-1)
    await axios.put(`http://localhost:5000/${id}`, { status: statu })
    .then((res)=> {
      reloadTasks()
      window.location.reload()
    }).catch((err)=> {
      console.log(err)
    })
  }

  const deleteTask = async (id)=> {
    setDropdownIndex(-1)
    await axios.delete(`http://localhost:5000/${id}`)
    .then((res)=> {
      reloadTasks()
      window.location.reload()
    }).catch((err)=> {
      console.log(err)
    })
  }
  
  return (
    <section className='py-12 w-10/12 m-auto'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-2xl text-stone-700'>List des Tâches ({tasksData.length})</h1>
          <p className='text-sm text-stone-500'>ici vous pouvez gérer vos tâches</p>
        </div>
        <Link to='/ajouter-tache' className='border border-primary p-2 px-7 text-[12px] font-semibold transition-all duration-200 hover:text-white hover:bg-primary'>Ajouter une Tache</Link>
      </div>
      <div className='mt-4'>
        <h5 className='font-semibold mb-2 text-slate-600'>Priorite: </h5>
        <div className='flex items-center gap-5'>
          <button onClick={()=> handleFilter("priorite", "tout")} className={`border border-primary transition-all duration-200 hover:bg-secondary hover:text-black ${priorite === "tout" && "bg-primary text-white"} p-2 px-7 text-[12px] font-semibold`}>Tout</button>
          <button onClick={()=> handleFilter("priorite", "Faible")} className={`border border-primary transition-all duration-200 hover:bg-secondary hover:text-black ${priorite === "Faible" && "bg-primary text-white"} p-2 px-7 text-[12px] font-semibold`}>Faible</button>
          <button onClick={()=> handleFilter("priorite", "Moyen")} className={`border border-primary transition-all duration-200 hover:bg-secondary hover:text-black ${priorite === "Moyen" && "bg-primary text-white"} p-2 px-7 text-[12px] font-semibold`}>Moyen</button>
          <button onClick={()=> handleFilter("priorite", "Elevé")} className={`border border-primary transition-all duration-200 hover:bg-secondary hover:text-black ${priorite === "Elevé" && "bg-primary text-white"} p-2 px-7 text-[12px] font-semibold`}>Elevé</button>
          <button onClick={()=> handleFilter("priorite", "Très élevé")} className={`border border-primary transition-all duration-200 hover:bg-secondary hover:text-black ${priorite === "Très élevé" && "bg-primary text-white"} p-2 px-7 text-[12px] font-semibold`}>Très élevé</button>
        </div>
      </div>
      <div className='mt-4'>
        <h5 className='font-semibold mb-2 text-slate-600'>Statut: </h5>
        <div className='flex items-center gap-5'>
          <button onClick={()=> handleFilter("statu", "tout")} className={`border border-secondary ${statu === "tout" && "bg-secondary"} transition-all duration-200 hover:bg-secondary p-2 px-7 text-[12px] font-semibold`}>Tout</button>
          <button onClick={()=> handleFilter("statu", "En attente")} className={`border border-secondary ${statu === "En attente" && "bg-secondary"} transition-all duration-200 hover:bg-secondary p-2 px-7 text-[12px] font-semibold`}>En attente</button>
          <button onClick={()=> handleFilter("statu", "En cours")} className={`border border-secondary ${statu === "En cours" && "bg-secondary"} transition-all duration-200 hover:bg-secondary p-2 px-7 text-[12px] font-semibold`}>En cours</button>
          <button onClick={()=> handleFilter("statu", "Terminé")} className={`border border-secondary ${statu === "Terminé" && "bg-secondary"} transition-all duration-200 hover:bg-secondary p-2 px-7 text-[12px] font-semibold`}>Terminé</button>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 mt-5'>
        {
          tasksData.length === 0 && (
            <div className='p-4 text-center'>
              <p className='text-sm text-stone-500'>Aucune tâche trouvée</p>
            </div>
          )
        }
        {
          tasksData.map((task, index)=> (
            <div key={index} className='flex items-center justify-between relative p-4 px-6 rounded-md w-[49.2%] transition-all duration-200 hover:shadow-lg' style={{ backgroundColor: 'rgba(201, 230, 240, 0.21)' }}>
              <div 
                onClick={()=> setDropdownIndex(dropdownIndex === -1 ? index: -1)} 
                className='absolute top-[-11px] right-[-7px] flex justify-center items-center border-[5px] border-white w-11 h-11 rounded-full bg-secondary transition-all duration-200 hover:bg-slate-500 hover:text-white cursor-pointer' 
              >
                <BiChevronDown className='text-2xl' />
              </div>
              {
                dropdownIndex === index && (
                  <div className='absolute top-[33px] right-0 z-10'>
                    <div className='bg-white border border-stone-300 rounded-md'>
                      <div className='pl-4 flex items-center gap-1'>
                        <span className='w-7 h-[1px] bg-stone-600'></span>
                        <h5 className='text-sm font-semibold text-slate-600 p-2 pr-10'>changer le statu</h5>
                      </div>
                      <div className='relative hover-d-block flex justify-between items-center bg-stone-100 p-2 px-3 transition-all duration-200 hover:bg-stone-50 cursor-pointer'>
                        <p className='text-sm'>{task.status}</p>
                        <div>
                          <BiChevronRight />
                        </div>
                        <div className='absolute top-0 right-[-118px] hover-d-none border border-stone-200 rounded-md'>
                          {
                            status.map((statu, index)=> (
                              task.status !== statu.value && (
                                <p key={index} onClick={()=> updateTask(task._id, statu.value)} className='text-sm border-b border-white font-semibold bg-stone-100 p-2 px-6 transition-all duration-200 hover:bg-stone-50'>{statu.value}</p>
                              )
                            ))
                          }
                        </div>
                      </div>
                      <div className='pl-4 flex items-center gap-1'>
                        <span className='w-7 h-[1px] bg-stone-600'></span>
                        <h5 className='text-sm font-semibold text-slate-600 p-2'>Auter action</h5>
                      </div>
                      <p onClick={()=> deleteTask(task._id)} className='bg-stone-100 p-2 px-3 text-sm cursor-pointer transition-all duration-200 hover:bg-stone-50'>Supprimer</p>
                    </div>
                  </div>
                )
              }
              
              <div className='flex flex-col gap-3'>
                <h3 className='font-semibold text-xl text-stone-700'>{task.title}</h3>
                <div className='flex'>
                  <p 
                    className={`${
                      task.cost <= 3 ? "bg-green-500" :  
                      task.cost > 3 && task.cost <= 6 ? "bg-yellow-500":  
                      task.cost > 6 && task.cost <= 8 ? "bg-orange-500":
                      task.cost > 8 && task.cost <= 10 ? "bg-red-500": "bg-gray-500"
                    } p-1 px-4 rounded-full font-semibold text-[12px] text-white`}
                  >
                    Priorite: {
                      task.cost <= 3 ? "Faible" :  
                      task.cost > 3 && task.cost <= 6 ? "Moyen":  
                      task.cost > 6 && task.cost <= 8 ? "Elevé":
                      task.cost > 8 && task.cost <= 10 ? "Très élevé": "Inconnue"
                    }
                  </p>
                </div>
              </div>
              <div>
                <p 
                  className={`${
                    task.status === "Terminée" ? "bg-green-500" :  
                    task.status === "En cours" ? "bg-blue-500":  
                    task.status === "En attente" ? "bg-yellow-500": "bg-gray-500"
                  } font-semibold p-1 text-sm px-6 rounded-full text-white`}
                >
                  {task.status}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Tasks