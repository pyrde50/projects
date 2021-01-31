import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import glovesReducer from './reducers/glovesReducer'
import manufacturerReducer from './reducers/manufacturerReducer'
import maskReducer from './reducers/maskReducer'
import beanieReducer from './reducers/beanieReducer'

const combinedStore = combineReducers({
  gloves: glovesReducer,
  masks: maskReducer,
  beanies: beanieReducer,
  manufacturers: manufacturerReducer
})

const store = createStore(
  combinedStore,
  composeWithDevTools(),
  applyMiddleware(thunk)
)

export default store
