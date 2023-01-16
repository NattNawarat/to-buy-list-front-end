import {React , useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import userService from '../services/users'
const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    //const [register, setRegister] = useState(false)
    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault()
        // create new user to register
        const newUser = {
            username:username,
            password:password
        }
        userService.register(newUser)
    }
    
    return (
        <div>
            <h2>Register</h2>
            <Form>
                {/* email */}
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password"
                        name="password" 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                {/* submit button */}
                <Button 
                    variant="primary" 
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default Register