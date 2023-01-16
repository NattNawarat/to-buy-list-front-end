import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import projectsService from '../../../services/projects'
import AddItem from './AddItem'
import ItemsTable from './ItemTable'
const Project = () => {
    const { id } = useParams()
    const [items, setItems] = useState([])
    let runningIndex = 0 //temporary _id for new item
    // Get project
    useEffect(() => {
        projectsService.getById(id)
            .then(project => {
                setItems(project.items)
            })

    }, [])
    const updateItems = () => {
        const newItems = items.forEach(function (item) { delete item._id })
        // update in db
    }
    return (
        <div>
            <ItemsTable items={items} setItems={setItems} updateItems={updateItems} />
            <h1>Add row</h1>
            <AddItem updateItems={updateItems} runningIndex={runningIndex}/>
        </div>
    )
}
export default Project