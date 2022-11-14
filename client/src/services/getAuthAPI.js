import axios from "axios"

const API_TOKEN = 'Dn3zCGtFgKYc2whom8DfZbWOYJgxO12RXNRBB-p6niIA7kTnyL28qwDHIgkRnV33-KQ'
const API_URL = 'https://www.universal-tutorial.com/api/getaccesstoken'

const getAuthAPI = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: API_URL,
            headers: { 
                'Accept': 'application/json',
                'api-token': API_TOKEN,
                'user-email': 'juangarzon07@gmail.com'
            }
        })
        return response.data.auth_token
    } catch (error) {
        console.error(error)
    }
}

export default getAuthAPI