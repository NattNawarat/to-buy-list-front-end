import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import projectsService from '../../../services/projects'
import { NumberWithCommas, ProjectTotalTHB } from '../../../utils/func'
import AddItem from './AddItem'
import ItemsTable from './ItemTable'
import SharedNavbar from '../../SharedNavbar'
const Project = ({currencies}) => {
    const { id } = useParams()
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setProjectDesc] = useState('')
    const [projectId, setProjectId] = useState('')
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState([])
    const [runningId, setRunningId] = useState(0) //temporary _id for new item
    // Get project
    const updateProject = (project) => {
        setItems(project.items)
        setProjectName(project.name)
        setProjectDesc(project.describtion)
        setProjectId(project.id)
    }

    useEffect(() => {
        projectsService.getById(id)
            .then(project => {
                updateProject(project)
            })

    }, [])

    useEffect(() => {
        setTotal(NumberWithCommas(ProjectTotalTHB(items,currencies).toFixed(2)))
    }, [items])

    const updateItems = () => {
        const newItems = { items: items.map(({ _id, ...keepAttrs }) => keepAttrs) }
        projectsService.updateItems(id, newItems)
            .then(project => {
                updateProject(project)
            })
    }
    return (
        <>
            <SharedNavbar/>
            <h1>{projectName}</h1>
            <p>{projectDesc}</p>
            {<ItemsTable currencies={currencies} items={items} setItems={setItems} updateItems={updateItems} />}
            <Button variant='success' onClick={() => updateItems()}>update items</Button>
            <h3>{total} THB</h3>
            <h2>Add item</h2>
            <AddItem items={items} setItems={setItems} updateItems={updateItems} runningId={runningId} setRunningId={setRunningId} />
            
        </>
    )
}
export default Project