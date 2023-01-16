import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import userService from '../services/users'
import Cookies from 'universal-cookie'
import { DecodeToken } from '../utils/func'
import { useNavigate } from 'react-router-dom'
const cookies = new Cookies()

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault()
        // send login request
        const userObject = {
            username: username,
            password: password
        }
        userService.login(userObject)
            .then((result) => {
                cookies.set('TOKEN', result.data.token, {
                    path: '/',
                })
                // redirect to auth homepage
                const username = DecodeToken().userName
                navigate('/auth/project')
                setLogin(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={(e) => handleSubmit(e)}>
                {/* username */}
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
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
            {/* display success message */}
            {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}
        </div>
    )
}
export default Login