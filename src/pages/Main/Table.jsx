import React from 'react'
import '../Main/Table.css'

function Table({ history }) {
  return (

    <tbody   >
      {history?.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.fistCard}</td>
          <td>{item.secondCard}</td>
          <td>{item.price} sum</td>
          <td>{item.data}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default Table