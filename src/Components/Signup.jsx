import { Button, Container, Heading, Input, VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";
import { Form, Link } from "react-router-dom";

const Signup = () =>{

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
                <Heading>VIDEO HUB</Heading>
                 <Avatar alignSelf={'center'} boxSize={'32'}/>

                 <Input placeholder="Name" type="text" required focusBorderColor="purple.500"></Input>


                <Input placeholder="Email" type="Email" required focusBorderColor="purple.500"></Input>

                <Input placeholder="Password" type="password" required focusBorderColor="purple.500"></Input>

               
                

                <Button colorScheme="purple" type="submit">Sign Up</Button>

                <Text textAlign={'right'}>Already Sign Up?{" "}
                <Button variant={'link'} alignSelf={'flex-end'}>
                    <Link to ={'/login'}>Log In</Link>
                </Button>
                </Text>
            </VStack>
         


    </Container>
    
    </>
)

}



export default Signup;