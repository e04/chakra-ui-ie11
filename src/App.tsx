import React from 'react';
import {
    Stack,
    Checkbox,
    Text,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Input,
    DrawerFooter,
    Accordion,
    AccordionItem,
    Box,
    AccordionPanel,
    AccordionButton,
    useDisclosure
} from "@chakra-ui/react"

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Text fontSize="6xl">Text</Text>
            <Stack spacing={10} direction="row">
                <Checkbox >Checkbox</Checkbox>
                <Checkbox defaultIsChecked>
                    Checkbox
                </Checkbox>
            </Stack>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input placeholder="Type here..." />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue">Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
            <Accordion defaultIndex={[0]} allowMultipl>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Section 1 title
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            Section 2 title
                        </Box>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default App;
