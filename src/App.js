import React from 'react'
import { Container} from 'react-bootstrap'
import Account from './components/account'
import FreeComponent from './components/free'
import AuthComponent from './components/auth'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRouter'
import ProjectGrid from './components/Project/ProjectGrid'
import ItemsTable from './components/Project/ItemList/ItemTable'
function App() {
    return (
        <Container>
            <Routes>
                <Route exact path="/" element={<Account />}/>
                <Route exact path="/free" element={<FreeComponent />} />
                <Route exact path="/project" element={<ProjectGrid colCount={4} md={3}/>} />
                <Route exact path="/table" element={<ItemsTable />} />
                <Route element={<PrivateRoutes/>}>
                    <Route path="/auth" element={<AuthComponent />} />
                    <Route path="/auth/:id/project" element={<ProjectGrid colCount={4} md={3}/>} />
                </Route>
            </Routes>
        </Container>
    )
}

export default App