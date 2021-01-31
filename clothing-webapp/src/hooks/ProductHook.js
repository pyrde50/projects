import React from 'react'
import { Table } from 'react-bootstrap'
import ManufacturerHook from './ManufacturerHook'
import { useSelector } from 'react-redux'

const ProductHook = (props) => {
  const manufacturer = useSelector(state => state.manufacturers)
  const product = props.product
  if (product === [] || !product) {
    return <div>items are not available at the moment</div>
  }
  if (product[0] === 'error' && product.length === 1) {
    return <h3>An error occured, please reload the page</h3>
  }
  return (
    <div>
      <h1>{props.type}</h1>
      <Table striped>
        <tbody>
          <tr>
            <td>NAME</td>
            <td>PRICE</td>
            <td>COLOR</td>
            <td>MANUFACTURER</td>
            <td>AVAILABILITY</td>
          </tr>
          {product.map(prod =>
            <tr key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              <td>{prod.color.reduce((color1, color2) => {
                return `${color1} ${color2}`}, '')}
              </td>
              <td>{prod.manufacturer}</td>
              <td><ManufacturerHook name={prod.manufacturer} id={prod.id} manufacturer={manufacturer}/></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductHook