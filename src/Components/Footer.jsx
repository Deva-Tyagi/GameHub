import React from "react";
import {Box, HStack, Heading, Stack, VStack,Input, Button,Text} from "@chakra-ui/react"
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineSend } from 'react-icons/ai'

const Footer = () =>{
    return(
        
        <Box bgColor={'blackAlpha.900'}  minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column',"row"]}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe To Get Update
                </Heading>

                <HStack
                borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder="Enter Your E-mail here..." border="none" borderRadius={'none'} outline={'none'} focusBorderColor="none">
                    </Input> 
                    <Button p={'0'} colorScheme="purple" variant={"ghost"} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size="20"/>
                    </Button>
                </HStack>
            </VStack >

            <VStack w={'full'} borderLeft={['none' , '1px solid white']} borderRight={['none' , '1px solid white']}>

          <Heading textTransform={'uppercase'}textAlign={'center'}> VIDEO HUB</Heading>
          <Text>All Right Reserved</Text>
            </VStack>

            <VStack w={'full'}>
             <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
            <HStack>
                
             <Button variant={'link'} colorScheme="white" padding={'2'}>
                <a href="#">YouTube</a>
                <AiFillYoutube color="red"  size={'25'}/>
             </Button>
             </HStack>
            <HStack>
            
             <Button variant={'link'} colorScheme="white" padding={'2'}>
                <a href="#">Instagram</a>
                <AiFillInstagram color="purple"  size={'25'}/>
             </Button>
             </HStack>

             <HStack>
             
             <Button variant={'link'} colorScheme="white" padding={'2'}>
                <a href="#">Facebook</a>
                <AiFillFacebook color="blue"  size={'25'}/>
             </Button>
             </HStack>
            </VStack>

        </Stack>
        
        </Box>
    )
};

export default Footer;