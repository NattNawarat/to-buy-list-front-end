import React from 'react'
import { Container } from 'react-bootstrap'
import Account from './components/account'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRouter'
import ProjectGrid from './components/Project/ProjectGrid'
import ItemsTable from './components/Project/ExistProject/ItemTable'
import AddNewProject from './components/Project/NewProject/AddNewProject'
import Project from './components/Project/ExistProject/Project'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return (
        <Container>
            <Routes>
                <Route exact path="/" element={<Account />} />
                <Route exact path="/project" element={<ProjectGrid colCount={4} md={3} />} />
                <Route exact path="/table" element={<ItemsTable />} />
                <Route element={<PrivateRoutes />}>
                    <Route exact path="/auth/project/add" element={<AddNewProject />} />
                    <Route path="/auth/project" element={<ProjectGrid colCount={4} md={3} />} />
                    <Route path="/auth/project/:id" element={<Project/>} />
                </Route>
            </Routes>
        </Container>
    )
}

export default App