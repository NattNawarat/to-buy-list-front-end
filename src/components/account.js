import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Login from './login'
import LoginExample from './loginExample'
import Register from './register'

export default function Account() {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1> To Buy List </h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h4> Create ,Edit and Calculate you hobby project budget. </h4>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p> NOTE: right now register service for external user is unavailable please LOGIN WITH DEMO ACCOUNT to see website functionality.</p>
            </div>
            <Row>
                {/* Login */}
                <Col xs={12} sm={12} md={6} lg={6}>
                    <LoginExample />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <Login />
                </Col>
            </Row>
        </>
    )
}
