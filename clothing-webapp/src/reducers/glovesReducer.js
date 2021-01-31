import productsService from '../services/productsService'

export const initializeGloves = () => {
  return async dispatch => {
    const gloves = await productsService.getAllGloves()
    if (gloves) {
      dispatch({
        type: 'INITIALIZEGLOVES',
        data: { gloves }
      })
    } else {
      dispatch({
        type: 'ERRORGLOVES'
      })
    }
  }
}

const glovesReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZEGLOVES':
    return action.data.gloves.data
  case 'ERRORGLOVES':
    if (state.includes('error') === false) {
      return state.concat('error')
    }
    return state
  default: return state
  }
}

export default glovesReducer