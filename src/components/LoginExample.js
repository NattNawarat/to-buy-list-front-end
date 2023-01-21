import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import userService from '../services/users'
import Cookies from 'universal-cookie'
import { DecodeToken } from '../utils/func'
import { useNavigate } from 'react-router-dom'
const cookies = new Cookies()

const LoginExample = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault()
        // send login request
        const userObject = {
            username: 'example',
            password: 'password'
        }
        userService.login(userObject)
            .then((result) => {
                cookies.set('TOKEN', result.data.token, {
                    path: '/',
                })
                // redirect to auth homepage
                const username = DecodeToken().userName
                navigate('/auth/project')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <h2>Login with DEMO account</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* username */}
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="username"
                        name="username"
                        value="example"
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value="password"
                    />
                </Form.Group>

                {/* submit button */}
                <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Login
                </Button>
            </Form>
        </div>
    )
}
export default LoginExample