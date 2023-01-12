import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { OpenInNewTab, ConvertToTHB } from '../../../utils/func'
const ItemsTable = () => {
    const { items, setItems } = useState<[]>([
        {
            id: 1,
            name: 'Alpha hopup chamber',
            imgUrl: 'https://www.silentindustries.eu/wp-content/uploads/2022/07/1000922-2-600x450.jpg',
            link: 'https://www.silentindustries.eu/product/silent-industries-mtw-alpha-hop-up-chamber/',
            price: 75.60,
            currency: 'EUR',
            quanttity: 1
        },
        {
            id: 2,
            name: 'Nozzle',
            imgUrl: 'https://www.silentindustries.eu/wp-content/uploads/2022/06/1001219-600x450.jpg',
            link: 'https://www.silentindustries.eu/product/wolverine-mtw-inferno-nozzle/',
            price: 18.84,
            currency: 'EUR',
            quanttity: 1
        },
    ])
    console.log(items)
    // increase item quantity
    const increase = (item) => {
        let newItems = items.map((i) => {

            if (item.id == i.id) {
                i.quantity += 1
            }
            return i
        })
        setItems(newItems)

    }

    const decrease = (item) => {
        let newItems = items.map((i) => {

            if (item.id == i.id) {
                if (i.quantity > 1) {
                    i.quantity -= 1
                }
            }
            return i
        })
        setItems(newItems)

    }
    const removeitem = (item) => {
        let newItems = items.filter((i) => i.id != item.id)
        setItems(newItems)
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((i, index) => (

                            < tr key={i.id}>
                                <th scope="row">{index + 1}</th>
                                <th scope="row">
                                    <img src={i.imgUrl} style={{ width: '4rem' }} />
                                </th>
                                <td>{i.name}</td>
                                <td>
                                    <Button variant="link" onClick={OpenInNewTab(i.link)} size="sm">Link</Button>
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
                                <td>{ConvertToTHB(i.price, i.currency)}</td>
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
        </div>
    )
}

export default ItemsTable