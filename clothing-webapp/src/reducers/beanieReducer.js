import productsService from '../services/productsService'

export const initializeBeanies = () => {
  return async dispatch => {
    const beanies = await productsService.getAllBeanies()
    if (beanies) {
      dispatch({
        type: 'INITIALIZEBEANIES',
        data: { beanies }
      })
    } else {
      dispatch({
        type: 'ERRORBEANIES'
      })
    }
  }
}

const beanieReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZEBEANIES':
    return action.data.beanies.data
  case 'ERRORBEANIES':
    if (state.includes('error') === false) {
      return state.concat('error')
    }
    return state
  default: return state
  }
}

export default beanieReducer