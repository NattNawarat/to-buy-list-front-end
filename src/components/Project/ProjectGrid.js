import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'
import projectsService from '../../services/projects'
import { ProjectTotalTHB, NumberWithCommas } from '../../utils/func'
import SharedNavbar from '../SharedNavbar'
const ProjectGrid = ({ currencies, colCount, md }) => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        projectsService.getAll()
            .then(initialProjects => {
                setProjects(initialProjects)
            })
    }, [])
    const [cards, setCards] = useState([])
    useEffect(() => {
        const newCards = projects.map(project => <ProjectCard key={project.id}
            name={project.name}
            describtion={project.describtion}
            total={NumberWithCommas(ProjectTotalTHB(project.items, currencies).toFixed(2))}
            projectId={project.id}
            projects={projects}
            setProjects={setProjects}
        />)
        setCards(newCards)
    }, [projects])

    let rowCount = Math.floor((cards.length) / colCount) + 1

    //Index is needed to keep track of the current element that we are one.
    let index = 0

    //This is the driver function for building the grid system.
    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    //Returns For example, we can have a row with 2 columns inside it.
    const renderRows = () => {
        let rows = []

        for (let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row'>
                    {
                        renderCols()
                    }
                </Row>
            )
        }
        return rows
    }

    //Returns an array of columns with the children inside.
    const renderCols = () => {
        let cols = []

        //If you want to add more bootstrap breakpoints you can pass them as props here.
        for (let col = 0; col < colCount; col++) {
            if (index < cards.length) {
                cols.push(
                    <Col className='Col' md={md}>
                        {cards[index]}
                    </Col>
                )
                index++
            }
        }
        return cols
    }

    return (
        <>
            <SharedNavbar />
            <body>
                <Container className='Container'>
                    {
                        buildGrid()
                    }
                </Container>
            </body>
        </>
    )
}
export default ProjectGrid