import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import { Logout } from '../utils/func'
import { useNavigate } from 'react-router-dom'


const SharedNavbar= () => {
    const navigate = useNavigate()
    const logout = () => {
        Logout()
        navigate('/')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/auth/project">To Buy List</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/auth/project">Projects</Nav.Link>
                            <Nav.Link href="/auth/project/add">Add Project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Form inline="true" className="mx-3">
                        <Button variant='danger' onClick={()=>{logout()}}>Logout</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default SharedNavbar