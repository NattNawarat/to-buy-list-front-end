import React from 'react'
import { Table } from 'react-bootstrap'
import TableRows from './TableRows'
const AddProjTable = ({rowsData,setRowsData}) => {

    const addTableRows = () => {
        event.preventDefault()
        const rowsInput = {
            imgUrl: '',
            name: '',
            productUrl: '',
            price: '',
            currency: '',
            quantity: '',
        }
        setRowsData([...rowsData, rowsInput])

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData]
        rows.splice(index, 1)
        setRowsData(rows)
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target
        const rowsInput = [...rowsData]
        rowsInput[index][name] = value
        setRowsData(rowsInput)



    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <Table >
                        <thead>
                            <tr>
                                <th>ImgUrl</th>
                                <th>Name</th>
                                <th>ProductUrl</th>
                                <th>Price</th>
                                <th>Currency</th>
                                <th>Quantity</th>
                                <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />
                        </tbody>
                    </Table>
                </div>
                <div className="col-sm-4">
                </div>
            </div>
        </div>
    )
}
export default AddProjTable