import React, { useEffect, useState } from 'react'
import AddProjTable from './AddProjTable'
import { Button } from 'react-bootstrap'
import projectsService from '../../../services/projects'
import SharedNavbar from '../../SharedNavbar'
import { useNavigate } from 'react-router-dom'
const AddNewProject = () => {
    const [projectName, setProjectName] = useState('')
    const [projectDesc, setProjectDesc] = useState('')
    const [rowsData, setRowsData] = useState([])
    const [submitable, setSubmitable] = useState(false)
    const navigate = useNavigate()
    const projectNameOnChange = (event) => {
        event.persist()
        setProjectName(event.target.value)
    }
    const projectDescOnChange = (event) => {
        event.persist()
        setProjectDesc(event.target.value)
    }
    const createNewProject = () => {
        event.preventDefault()
        projectsService.create(projectName, projectDesc, rowsData)
            .then(result => navigate('/auth/project'))
    }
    const checkSubmitable = () => {
        const tableIsEmpty = rowsData.map((object) => Object.values(object).some(x => x === null || x === '')).includes(true)
        const nameIsEmpty = (projectName === null || projectName === '')
        const descIsEmpty = (projectDesc === null || projectDesc === '')
        setSubmitable(!(tableIsEmpty || nameIsEmpty || descIsEmpty))
    }
    useEffect(checkSubmitable, [projectName, projectDesc, rowsData])
    return (
        <>
            <SharedNavbar />
            <form>
                <h2>Name</h2>
                <input type="text" value={projectName} onChange={(event) => (projectNameOnChange(event))} name="projectName" />
                <h2>Describtion</h2>
                <textarea type="text" value={projectDesc} onChange={(event) => (projectDescOnChange(event))} rows="4" cols="50" />
                <AddProjTable rowsData={rowsData} setRowsData={setRowsData} />
                <Button variant="primary" type="submit" disabled={!submitable} onClick={() => createNewProject()}>Submit</Button>
            </form>
        </>
    )
}
export default AddNewProject