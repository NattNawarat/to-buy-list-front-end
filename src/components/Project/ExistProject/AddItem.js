import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
const AddItem = ({setItems, runningIndex}) => {
    const [imgUrl,setImgUrL] = useState('')
    const [name,setName] = useState('')
    const [productUrl,setProductUrl] = useState('')
    const [price,setPrice] = useState(0)
    const [currency,setCurrency] = useState('')
    const [quantity,setQuantity] = useState(0)
    const handleChange = (evnt,setVal) => {
        const value = evnt.target.value
        setVal(value)
    }
    
    return (
        <Table >
            <thead>
                <tr>
                    <th>ImgUrl</th>
                    <th>Name</th>
                    <th>ProductUrl</th>
                    <th>Price</th>
                    <th>Currency</th>
                    <th>Quantity</th>
                </tr>
                <tr>
                    <td><textarea type="text" value={imgUrl} onChange={(evnt) => (handleChange(evnt,setImgUrL))} rows="1" cols="200" name="imgUrl" className="form-control" /> </td>
                    <td><input type="text" value={name} onChange={(evnt) => (handleChange(evnt,setName))} name="name" className="form-control" /> </td>
                    <td><textarea type="text" value={productUrl} onChange={(evnt) => (handleChange(evnt,setProductUrl))} rows="1" cols="200" name="productUrl" className="form-control" /> </td>
                    <td><input type="number" value={price}
                        onChange={(evnt) => {
                            // if value is not blank, then test the regex

                            /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                handleChange(evnt)
                            }*/
                            handleChange(evnt,setPrice)

                        }}
                        name="price" className="form-control" />
                    </td>
                    <td><input type="text" value={currency} onChange={(evnt) => (handleChange(evnt,setCurrency))} name="currency" className="form-control" /> </td>
                    <td><input type="number" value={quantity}
                        onChange={(evnt) => {
                            // if value is not blank, then test the regex

                            /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                handleChange(evnt)
                            }*/
                            handleChange(evnt,setQuantity)
                        }}
                        name="quantity" className="form-control" />
                    </td>
                </tr>
            </thead>
        </Table>
    )
}
export default AddItem