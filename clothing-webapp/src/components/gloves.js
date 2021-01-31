import { useSelector } from 'react-redux'
import React from 'react'
import ProductHook from '../hooks/ProductHook'


const Gloves = () => {
  const product = useSelector(state => state.gloves)
  return (
    <div>
      <ProductHook product={product} type='GLOVES'/>
    </div>
  )
}

export default Gloves