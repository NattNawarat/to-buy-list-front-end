import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
const AddItem = ({ items, setItems, runningId, setRunningId }) => {
    const [imgUrl, setImgUrL] = useState('')
    const [name, setName] = useState('')
    const [productUrl, setProductUrl] = useState('')
    const [price, setPrice] = useState(0)
    const [currency, setCurrency] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [submitable,setSubmitable] = useState(false)
    const handleChange = (evnt, setVal) => {
        const value = evnt.target.value
        setVal(value)
    }
    const addItem = () => {
        const newItem = {
            imgUrl: imgUrl,
            name: name,
            productUrl: productUrl,
            price: price,
            currency: currency,
            quantity: quantity,
            _id: String(runningId)
        }
        setItems([...items, newItem])
        setRunningId(runningId + 1)
    }
    useEffect(()=>{
        const imgUrlIsEmpty = (imgUrl === null || imgUrl ==='')
        const nameIsEmpty = (name === null || name ==='')
        const productUrlIsEmpty = (productUrl === null || productUrl ==='')
        const priceIsEmpty = (price === null)
        const currencyIsEmpty = (currency === null || currency ==='')
        const quantityIsEmpty = (quantity === null)
        setSubmitable(!(imgUrlIsEmpty || nameIsEmpty || productUrlIsEmpty || priceIsEmpty || currencyIsEmpty || quantityIsEmpty))
    },[imgUrl,name,productUrl,price,currency,quantity])
    return (
        <>
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
                        <td><textarea type="text" value={imgUrl} onChange={(evnt) => (handleChange(evnt, setImgUrL))} rows="1" cols="200" name="imgUrl" className="form-control" /> </td>
                        <td><textarea type="text" value={name} onChange={(evnt) => (handleChange(evnt, setName))} name="name" rows="1" cols="100" className="form-control" /> </td>
                        <td><textarea type="text" value={productUrl} onChange={(evnt) => (handleChange(evnt, setProductUrl))} rows="1" cols="200" name="productUrl" className="form-control" /> </td>
                        <td><input type="number" value={price}
                            onChange={(evnt) => {
                                // if value is not blank, then test the regex

                                /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                    handleChange(evnt)
                                }*/
                                handleChange(evnt, setPrice)

                            }}
                            name="price" className="form-control" />
                        </td>
                        <td><input type="text" value={currency} onChange={(evnt) => (handleChange(evnt, setCurrency))} name="currency" className="form-control" /> </td>
                        <td><input type="number" value={quantity}
                            onChange={(evnt) => {
                                // if value is not blank, then test the regex

                                /*if (evnt.target.value === '' || IsNumeric(evnt.target.value)) {
                                    handleChange(evnt)
                                }*/
                                handleChange(evnt, setQuantity)
                            }}
                            name="quantity" className="form-control" />
                        </td>
                        <td>
                            <Button onClick={addItem} disabled = {!submitable}>Add</Button>
                        </td>
                    </tr>
                </thead>
            </Table>

        </>
    )
}
export default AddItem