import { useSelector } from 'react-redux'
import React from 'react'
import ProductHook from '../hooks/ProductHook'


const Beanies = () => {
  const product = useSelector(state => state.beanies)
  return (
    <div>
      <ProductHook product={product} type='BEANIES'/>
    </div>
  )
}

export default Beanies