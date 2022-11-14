import { useState, useEffect } from 'react'
import axios from "axios"
import getCountries from '../services/getCountries'
import getAuthAPI from '../services/getAuthAPI'


function Form() {

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [error, setError] = useState(false)
    const [message, setMessage] = useState(false)
    const [countries, setCountries] = useState([])

    const handleSubmit = (ev) => {
        ev.preventDefault()

        if(name === '' || country === '') {
            setMessage(false)
            setError('Campos Requeridos !!!')
        } else {
            setError(false)
            setMessage(false)
            axios({
                method: 'POST',
                url: '/api/users/save',
                data: {
                    name,
                    country
                }
            })
            .then((res) => setMessage(res.data.message))
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const auth_api = await getAuthAPI()

            const paises = await getCountries(auth_api)

            setCountries(paises)

        }
        fetchData()

    }, [setCountries])
    

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full h-screen flex flex-col justify-evenly items-center outline outline-1 outline-black">
                <h1 className="text-2xl font-bold">Register</h1>
                {!error ? '' : 
                    <h1 className="text-2xl font-bold text-red-500">{error}</h1>
                }

                {!message ? '' : 
                    <h1 className="text-2xl font-bold text-green-500">{message}</h1>
                }
                
                
                <div className="flex flex-col">
                    <label htmlFor="name" className="px-5 py-2">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        placeholder="Your name here..."
                        className="px-5 py-3 w-80 rounded-full outline outline-1 outline-gray-300 shadow-lg"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="country" className="px-5 py-2">Country:</label>
                    <select
                        name="country"
                        value={country}
                        onChange={ev => setCountry(ev.target.value)}
                        className="px-5 py-3 w-80 rounded-full outline outline-1 outline-gray-300 shadow-lg"
                    >
                        <option value='' disabled>Select country...</option>
                        {countries.map(mapCountry => (
                            <option key={mapCountry.country_short_name} value={mapCountry.country_name}>{mapCountry.country_name}</option>
                        ))}
                    </select>
                </div>
                <button className="px-7 py-4 rounded-full outline outline-1 outline-gray-300 shadow-xl hover:bg-gray-100 hover:outline-gray-500">Submit</button>
            </form>
        </>
    )
}

export default Form