import {
    Card,
    CardBody,
    CardFooter,
    Text,
    Heading,
    Stack,
    Divider,
    ButtonGroup,
    Button,
    Box,
    Image,
    Center,
    Link,
} from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa"

function About() {

    return (
        <Box display="flex" mt="50px" justifyContent="center" bg="#f4eae3" pb="200px">
            <Box
                display="flex"
                gap="50px"
                mt="200px"
                justifyContent="center"
                
            >
                <Card maxW="lg" maxH="lg">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">Piyush</Heading>
                            <Text>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsam sapiente dignissimos earum et vitae, blanditiis dolor deserunt tenetur harum nam debitis molestias, assumenda, voluptate est fugiat labore. Nostrum, repudiandae.
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter display="flex" justifyContent="center">
                        <ButtonGroup spacing="2">
                            <Link href="https://github.com/piyush13101994">
                                <Button color="white" backgroundColor='gray' leftIcon={<FaGithub />}>
                                    Github
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/piyush-bisht-7b3658299/">
                                <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
                                    Linkedin
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>

                {/* <Image
                    display="flex"
                    src="logo.png"
                    width="250px"
                    height="100px"
                    backgroundColor="teal"
                    borderRadius="50px"
                    mt="-100px"
                ></Image> */}

                <Card maxW="lg">
                    <CardBody>
                        <Stack mt="6" spacing="3">
                            <Heading size="md">Manuel Tavares</Heading>
                            <Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla maiores est impedit! Incidunt distinctio modi, ea cum esse, laboriosam vero vitae alias ipsam ipsa consequatur in odit labore repudiandae sapiente?
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter display="flex" justifyContent="center">
                        <ButtonGroup spacing="2">
                            <Link href="https://github.com/manuelDiogo">
                            <Button color="white" backgroundColor='gray' leftIcon={<FaGithub />}>
                                    Github
                                </Button>
                            </Link>
                            <Link href="https://www.linkedin.com/in/manuel-tavares-6742a1294/">
                            <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
                                    Linkedin
                                </Button>
                            </Link>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </Box>
    );
}

export default About;
