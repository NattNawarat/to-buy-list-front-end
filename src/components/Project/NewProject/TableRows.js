import React from 'react'
import Button from 'react-bootstrap/Button'
function TableRows({ rowsData, deleteTableRows, handleChange }) {
    return (

        rowsData.map((data, index) => {
            const { ImgUrl, Name, ProductUrl, Price, Currency, Quantity } = data
            return (
                <tr key={index}>
                    <td><input type="text" value={ImgUrl} onChange={(evnt) => (handleChange(index, evnt))} name="ImgUrl" className="form-control" /> </td>
                    <td><input type="text" value={Name} onChange={(evnt) => (handleChange(index, evnt))} name="Name" className="form-control" /> </td>
                    <td><input type="text" value={ProductUrl} onChange={(evnt) => (handleChange(index, evnt))} name="ProductUrl" className="form-control" /> </td>
                    <td><input type="text" value={Price} onChange={(evnt) => (handleChange(index, evnt))} name="Price" className="form-control" /> </td>
                    <td><input type="text" value={Currency} onChange={(evnt) => (handleChange(index, evnt))} name="Currency" className="form-control" /> </td>
                    <td><input type="text" value={Quantity} onChange={(evnt) => (handleChange(index, evnt))} name="Quantity" className="form-control" /> </td>
                    <td><Button variant="danger" onClick={() => (deleteTableRows(index))}>x</Button></td>
                </tr>
            )
        })

    )

}
export default TableRows