import manufacturerService from '../services/manufacturerService'

export const initializeManufacturers = (name) => {
  return async dispatch => {
    var manufacturers = await manufacturerService.getAll(name)
    if (manufacturers) {
      if (manufacturers.response === '[]') {
        var i = true
        while (i) {
          manufacturers = await manufacturerService.getAll(name)
          if (manufacturers.response !== '[]') {
            i = false
          }
        }
      }
      dispatch({
        type: 'INITIALIZEMANUFACTURERS',
        data: { manufacturers, name }
      })
    } else {
      dispatch({
        type: 'ERROR'
      })
    }
  }
}

const manufacturerReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZEMANUFACTURERS':
    if (state.includes(manufacturer => manufacturer.name === action.data.name)) {
      return state
    } else {
      state.push({ 'name': action.data.name, 'list': action.data.manufacturers.response })
    }
    return state
  case 'ERROR':
    return state.push('error')
  default: return state
  }
}

export default manufacturerReducer