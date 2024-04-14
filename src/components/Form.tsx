import { useState } from "react"
import { categories } from "../data/categories"
export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    })

    return (
        <form 
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label className="font-semibold" htmlFor="category">Categoria:</label>
                <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" name="category" id="category"
                value={activity.category}
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
                />
            </div>

            <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-semibold cursor-pointer uppercase text-white" 
                value='Guardar registro'
            />
        </form>
    )
}
