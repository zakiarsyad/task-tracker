import React from "react"
import { Container, Heading } from '@chakra-ui/react'
import { TaskForm } from '../components/TaskForm'

export const Home = () => {
    return (
        <Container maxW="container.md">
            <Heading textAlign="center" color="teal.600">Task Tracker</Heading>
            <TaskForm />
        </Container>
    )
}