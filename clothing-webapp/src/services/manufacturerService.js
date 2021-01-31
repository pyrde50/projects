import axios from 'axios'

const baseURL = 'https://bad-api-assignment.reaktor.com'
const manufacturerURL = '/v2/availability/'


const getAll = async (name) => {
  try {
    const response = await axios.get(`${baseURL}${manufacturerURL}${name}`)
    return response.data
  } catch (e) {
    throw new Error(e)
  }

}


export default { getAll }