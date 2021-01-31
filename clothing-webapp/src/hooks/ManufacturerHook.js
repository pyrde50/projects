import React, { useState } from 'react'

const ManufacturerHook = (props) => {
  const [value, setValue] = useState(null)
  if (value !== null) {
    return value
  }
  const manufacturer = props.manufacturer
  if (manufacturer.length === 0) {
    return <div>LOADING...</div>
  }
  const data = manufacturer.find(manufacturerData => manufacturerData.name === props.name)
  if (!data) {
    return <div>NO DATA AVAILABLE</div>
  }
  const availability = data.list.find(available => available.id.toLowerCase() === props.id).DATAPAYLOAD
  const final = availability.split('<').join(',').split('>').join(',').split(',')
  setValue(final[8])
  return <div>{final[8]}</div>
}

export default ManufacturerHook