import React from 'react';
import {
    Stack,
    Checkbox,
    Text
} from "@chakra-ui/react"

function App() {
    return (
        <>
            <Text fontSize="6xl">Text</Text>
            <Stack spacing={10} direction="row">
                <Checkbox >Checkbox</Checkbox>
                <Checkbox defaultIsChecked>
                    Checkbox
                </Checkbox>
            </Stack>
        </>
    )
}

export default App;
