import { Box, Input, Textarea, Stack, Button } from '@chakra-ui/react'
import { useState } from "react"

const tasks = []

export const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        tasks.push({
            id: tasks.length + 1,
            title: title,
            description: desc,
            completed: false
        })

        console.log("Button Clicked")
        console.log(tasks)

        setTitle("")
        setDesc("")
    }

    return (
        <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg" mb={4}>
            <Stack spacing={3}>
                <Input
                    placeholder='Task title'
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                />
                <Textarea
                    placeholder='Task description'
                    value={desc}
                    onChange={(e) => { setDesc(e.target.value) }}
                />
                <Button type='submit'>Add Task</Button>
            </Stack>
        </Box>
    )
}