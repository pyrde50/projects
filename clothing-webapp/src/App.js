import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeGloves } from './reducers/glovesReducer'
import Gloves from './components/gloves'
import { initializeBeanies } from './reducers/beanieReducer'
import { initializeMasks } from './reducers/maskReducer'
import { initializeManufacturers } from './reducers/manufacturerReducer'
import {
  Switch, Route, Link
} from 'react-router-dom'
import Beanies from './components/beanies'
import Masks from './components/masks'

const App = () => {
  const dispatch = useDispatch()
  const gloves = useSelector(state => state.gloves)
  const beanies = useSelector(state => state.beanies)
  const masks = useSelector(state => state.masks)

  const allManufacturers = () => {
    const manGloves = Array.from(new Set(gloves.map(gloves => gloves.manufacturer)))
    const manBeanies = Array.from(new Set(beanies.map(beanie => beanie.manufacturer)))
    const manMasks = Array.from(new Set(masks.map(mask => mask.manufacturer)))
    if (manMasks.length !== 0 && manBeanies.length !== 0 && manGloves.length !== 0) {
      const all = [...manGloves, ...manBeanies, ...manMasks]
      const allNoDuplicates = Array.from(new Set(all)).filter(manufacturer => manufacturer !== undefined)
      for (let index = 0; index < allNoDuplicates.length; index++) {
        dispatch(initializeManufacturers(allNoDuplicates[index]))
      }
    }
  }

  useEffect(() => {
    dispatch(initializeGloves())
    dispatch(initializeBeanies())
    dispatch(initializeMasks())
  }, [dispatch])
  allManufacturers()

  return (
    <div>
      <div>
        <Link to="/gloves">  GLOVES  </Link>
        <Link to="/facemasks">  FACEMASKS  </Link>
        <Link to="/beanies">  BEANIES  </Link>
      </div>
      <Switch>
        <Route path="/gloves">
          <Gloves/>
        </Route>
        <Route path="/facemasks">
          <Masks/>
        </Route>
        <Route path="/beanies">
          <Beanies/>
        </Route>
        <Route path="/">
          <Gloves />
        </Route>
      </Switch>
    </div>
  )
}

export default App
