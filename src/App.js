import React from 'react'
import { Container} from 'react-bootstrap'
import Account from './components/account'
import FreeComponent from './components/free'
import AuthComponent from './components/auth'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRouter'
function App() {
    return (
        <Container>
            <Routes>
                <Route exact path="/" element={<Account />}/>
                <Route exact path="/free" element={<FreeComponent />} />
                <Route element={<PrivateRoutes/>}>
                    <Route path="/auth" element={<AuthComponent />} />
                </Route>
            </Routes>
        </Container>
    )
}

export default App