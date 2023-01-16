import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({name,describtion,total,projectId}) => {
    const navigate = useNavigate()
    return (
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{total} THB</Card.Subtitle>
                <Card.Text>
                    {describtion}
                </Card.Text>
                <Button variant="primary" onClick={()=>{navigate(`/auth/project/${projectId}`)}}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
export default ProjectCard