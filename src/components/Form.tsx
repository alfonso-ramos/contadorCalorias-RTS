import { useState, ChangeEvent, FormEvent, Dispatch } from "react"

import {v4 as uuidv4} from 'uuid'
import { categories } from "../data/categories"
import type { Activity } from "../types"
import { ActivityActions, } from '../reducers/activity-reducer';

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

export default function Form({dispatch} : FormProps) {

    const initialState : Activity = {
        id: uuidv4(),
        category: 1,
        name: '',
        calories: 0,
    }
    
    const [activity, setActivity] = useState<Activity>(initialState)


    const handleChange = (e : ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id)
        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'save-activity', payload: {newActivity: activity}})

        setActivity({
            // Hace una copia del unitialState para que vuelva a llamar a la funcion de generar un ID
            ...initialState,
            id: uuidv4()
        })
    } 
    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label className="font-semibold" htmlFor="category">Categoria:</label>
                <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" name="category" id="category"
                value={activity.category}
                onChange={handleChange}
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label className="font-semibold" htmlFor="name">Actividad:</label>
                <input 
                    id="name" 
                    type="text" 
                    className="border border-l-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Comida,Ensalada, Ejercicio, Pesas, etc"
                    value={activity.name}
                    onChange={handleChange}

                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label className="font-semibold" htmlFor="calories">Calorias:</label>
                <input 
                    id="calories" 
                    type="number" 
                    className="border border-l-slate-300 p-2 rounded-lg"
                    placeholder="Calorias, ej. 300, 500, etc"
                    value={activity.calories}
                    onChange={handleChange}

                />
            </div>

            <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-semibold cursor-pointer uppercase text-white disabled:opacity-20 disabled:cursor-not-allowed" 
                value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}
