import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'
const ProjectGrid = ({ colCount, md }) => {
    const titles = ['a', 'b', 'c', 'd', 'e']
    const cards = titles.map(title => ProjectCard(title))
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
        <Container className='Container'>
            {
                buildGrid()
            }
        </Container>
        
    )
}
export default ProjectGrid