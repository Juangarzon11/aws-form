import axios from "axios"

const API_URL = 'https://www.universal-tutorial.com/api/countries/'

const getCountries = async (authAPI) => {
    try {
        const countries = await axios({
            method: 'GET',
            url: API_URL,
            headers: { 
                'Accept': 'application/json',
                'Authorization': `Bearer ${authAPI}`,
            }
        })
        return countries.data
    } catch (error) {
        console.error(error)
    }

}

export default getCountries