import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import { OpenInNewTab, ConvertToTHB, NumberWithCommas } from '../../../utils/func'
const ItemsTable = ({currencies,items,setItems,updateItems}) => {
    const [total, setTotal] = useState(0)


    const calculateTotal = () => {
        const newTotal = items.reduce((total, item) => {
            return total + (ConvertToTHB(item.price, item.currency,currencies) * item.quantity).toFixed(2)
        }, 0)
        setTotal(newTotal)
    }

    // increase item quantity
    const increase = (item) => {
        let newItems = items.map((i) => {

            if (item._id == i._id) {
                i.quantity += 1
            }
            return i
        })
        setItems(newItems)

    }

    const decrease = (item) => {
        let newItems = items.map((i) => {

            if (item._id == i._id) {
                if (i.quantity > 1) {
                    i.quantity -= 1
                }
            }
            return i
        })
        setItems(newItems)

    }
    const removeitem = (item) => {
        let newItems = items.filter((i) => i._id != item._id)
        setItems(newItems)
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Name</th>
                    <th>Link</th>
                    <th>Price</th>
                    <th>Currency</th>
                    <th>Quantity</th>
                    <th>Total(THB)</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((i, index) => (

                        < tr key={i._id}>
                            <td >{index + 1}</td>
                            <td >
                                <img src={i.imgUrl} style={{ width: '4rem' }} />
                            </td>
                            <td>{i.name}</td>
                            <td>
                                <Button variant="primary" onClick={() => OpenInNewTab(i.productUrl)} size="sm">Link</Button>
                            </td>
                            <td>{i.price}</td>
                            <td>{i.currency}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    onClick={() => decrease(i)}
                                    size="sm"
                                >
                                    -
                                </Button>
                                {i.quantity}
                                <Button
                                    variant="primary"
                                    onClick={() => increase(i)}
                                    size="sm"
                                >
                                    +
                                </Button>
                            </td>
                            <td>{`${NumberWithCommas((ConvertToTHB(i.price, i.currency,currencies) * i.quantity).toFixed(2))}`}</td>
                            <td>
                                <Button
                                    variant="primary"
                                    onClick={() => removeitem(i)}
                                    size="sm"
                                >
                                    Remove
                                </Button>
                            </td >
                        </tr >
                    ))
                }
            </tbody>
        </Table>
    )
}

export default ItemsTable