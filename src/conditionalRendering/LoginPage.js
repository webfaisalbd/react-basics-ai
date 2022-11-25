import React from 'react'
import { Button, Card } from 'react-bootstrap'

const LoginPage = () => {
    return (
        <>
            <Card>
                <Card.Header>LOGIN PAGE</Card.Header>
                <Card.Body>
                    <Card.Title>Please Enter your User and Password</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Login Here</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default LoginPage