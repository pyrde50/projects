import { useSelector } from 'react-redux'
import React from 'react'
import ProductHook from '../hooks/ProductHook'


const Masks = () => {
  const product = useSelector(state => state.masks)
  return (
    <div>
      <ProductHook product={product} type='FACEMASKS'/>
    </div>
  )
}

export default Masks