import React from 'react'
import Button from 'react-bootstrap/Button'
import { IsNumeric } from '../../../utils/func'
const TableRows = ({ rowsData, deleteTableRows, handleChange }) => {
    return (

        rowsData.map((data, index) => {
            const { imgUrl, name, productUrl, price, currency, quantity } = data
            return (
                <tr key={index}>
                    <td><textarea type="text" value={imgUrl} onChange={(evnt) => (handleChange(index, evnt))} rows="1" cols="200" name="imgUrl" className="form-control" /> </td>
                    <td><textarea type="text" value={name} onChange={(evnt) => (handleChange(index, evnt))} rows="1" cols="100" name="name" className="form-control" /> </td>
                    <td><textarea type="text" value={productUrl} onChange={(evnt) => (handleChange(index, evnt))} rows="1" cols="200" name="productUrl" className="form-control" /> </td>
                    <td><input type="number" value={price}
                        onChange={(evnt) => {
                            // if value is not blank, then test the regex
                            
                            /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                handleChange(index, evnt)
                            }*/
                            handleChange(index, evnt)
                            
                        }}
                        name="price" className="form-control" />
                    </td>
                    <td><input type="text" value={currency} onChange={(evnt) => (handleChange(index, evnt))} name="currency" className="form-control" /> </td>
                    <td><input type="number" value={quantity}
                        onChange={(evnt) => {
                            // if value is not blank, then test the regex
                            
                            /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                handleChange(index, evnt)
                            }*/
                            handleChange(index, evnt)
                        }}
                        name="quantity" className="form-control" />
                    </td>
                    <td><Button variant="danger" onClick={() => (deleteTableRows(index))}>x</Button></td>
                </tr>
            )
        })

    )

}
export default TableRows