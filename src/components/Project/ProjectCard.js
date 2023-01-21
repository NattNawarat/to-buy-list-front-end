import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import DeleteConfirmation from './DeleteConfirmation'
import projectsService from '../../services/projects'
function DeleteProject(projectId) {
    const [showAlert, setShowAlert] = useState(false)

    const handleDelete = () => {
        // Perform your dangerous critical action here.
        // Remember to close your alert
        setShowAlert(false)
    }

    return (
        <>
            <Button variant="danger" onClick={() => setShowAlert(true)}>
                Delete
            </Button>

            <Alert
                isOpen={showAlert}
                onClose={() => setShowAlert(false)}
                title="Delete"
                description="Are you sure you want to delete this project?"
                confirmBtnLabel="Yes"
                onConfirm={handleDelete}
            />
        </>
    )
}

const ProjectCard = ({ name, describtion, total, projectId, projects, setProjects }) => {
    const navigate = useNavigate()

    // for delete modal

    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false)
    const showDeleteModal = () => {
        setDisplayConfirmationModal(true)
    }
    const submitDelete = (projectId) => {
        projectsService.deleteProject(projectId)
            .then(deletedProject => {
                setProjects(projects.filter(project => project.id !== deletedProject.id))
            })
        
        setDisplayConfirmationModal(false)
    }
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false)
    }
    const deleteMessage = 'Are you sure you want to delete this project?'

    return (
        <Card>
            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{total} THB</Card.Subtitle>
                <Card.Text>
                    {describtion}
                </Card.Text>
                <Button variant="primary" onClick={() => { navigate(`/auth/project/${projectId}`) }}>Enter</Button>
                <Button variant="danger" onClick={() => showDeleteModal()}>Delete</Button>
                <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} message={deleteMessage} id={projectId} />
            </Card.Body>
        </Card>
    )
}
export default ProjectCard