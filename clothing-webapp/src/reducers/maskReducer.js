import productsService from '../services/productsService'

export const initializeMasks = () => {
  return async dispatch => {
    const masks = await productsService.getAllMasks()
    if (masks) {
      dispatch({
        type: 'INITIALIZEMASKS',
        data: { masks }
      })
    } else {
      dispatch({
        type: 'ERRORMASKS'
      })
    }
  }
}

const maskReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZEMASKS':
    return action.data.masks.data
  case 'ERRORMASKS':
    if (state.includes('error') === false) {
      return state.concat('error')
    }
    return state
  default: return state
  }
}

export default maskReducer