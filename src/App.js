import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Account from './components/account'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRouter'
import ProjectGrid from './components/Project/ProjectGrid'
import ItemsTable from './components/Project/ExistProject/ItemTable'
import AddNewProject from './components/Project/NewProject/AddNewProject'
import Project from './components/Project/ExistProject/Project'
import currenciesService from './services/currencies'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    const [currencies,setCurrencies] = useState([
        {
            'currency': 'EUR',
            'rate': 0.028149,
        },
        {
            'currency': 'HKD',
            'rate': 0.239061,
        },
        {
            'currency': 'JPY',
            'rate': 3.943403,
        },
        {
            'currency': 'USD',
            'rate': 0.030525,
        },
    ])
    useEffect(()=>{
        currenciesService.get().then(
            (currencies) => {
                if (currencies){
                    setCurrencies(currencies.rates)
                }
            }
        )
    },[])
    return (
        <Container>
            <Routes>
                <Route exact path="/" element={<Account />} />
                <Route exact path="/project" element={<ProjectGrid colCount={4} md={3} />} />
                <Route exact path="/table" element={<ItemsTable />} />
                <Route element={<PrivateRoutes />}>
                    <Route exact path="/auth/project/add" element={<AddNewProject />} />
                    <Route path="/auth/project" element={<ProjectGrid currencies={currencies} colCount={4} md={3} />} />
                    <Route path="/auth/project/:id" element={<Project currencies={currencies}/>} />
                </Route>
            </Routes>
        </Container>
    )
}

export default App