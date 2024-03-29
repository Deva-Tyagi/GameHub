import { Button, Container, Heading, Input, VStack, Text } from "@chakra-ui/react";
import React from "react";
import { Form, Link } from "react-router-dom";

const Login = () =>{

return(
    <>
    
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
          
         
            <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input placeholder="Email" required focusBorderColor="purple.500"></Input>

                <Input placeholder="Password" type="password" required focusBorderColor="purple.500"></Input>

                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to ={'/forgotpassword'}>Forgot Password</Link>
                </Button>

                <Button colorScheme="purple" type="submit">Log In</Button>

                <Text textAlign={'right'}>New User?{" "}
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to ={'/signup'}>Sign Up</Link>
                </Button>
                </Text>
            </VStack>
         


    </Container>
    
    </>
)

}

export default Login;