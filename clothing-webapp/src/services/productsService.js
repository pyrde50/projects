import axios from 'axios'

const baseURL = 'https://bad-api-assignment.reaktor.com'
const glovesURL = '/v2/products/gloves'
const maskURL = '/v2/products/facemasks'
const beanieURL = '/v2/products/beanies'

const getAllGloves = async () => {
  try {
    const response = await axios.get(`${baseURL}${glovesURL}`)
    return response
  } catch (e) {
    console.log(e)
    setTimeout(() => {
      getAllGloves()
    }, 30000)
  }
}

const getAllMasks = async () => {
  try {
    const response = await axios.get(`${baseURL}${maskURL}`)
    return response
  } catch (e) {
    console.log(e)
    setTimeout(() => {
      getAllMasks()
    }, 30000)
  }
}

const getAllBeanies = async () => {
  try {
    const response = await axios.get(`${baseURL}${beanieURL}`)
    return response
  } catch (e) {
    console.log(e)
    setTimeout(() => {
      getAllBeanies()
    }, 30000)
  }
}

export default { getAllGloves, getAllBeanies, getAllMasks }