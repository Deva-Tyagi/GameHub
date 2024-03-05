import React from "react";
import {useColorMode , useColorModeValue , IconButton} from '@chakra-ui/react';
import {FaMoon , FaSun} from 'react-icons/fa';

const ColorModeSwitcher = (props) =>{
    const {toggleColorMode} = useColorMode();
    const text = useColorModeValue('dark' , 'light');
    const SwitchIcon = useColorModeValue(FaMoon , FaSun);


return(
    <IconButton
    size="md"
    fontSize="lg"
    aria-label={`switch to ${text} mode`}
    variant="ghost"
    pos={"fixed"}
    top={'4'}
    right={'4'}
    zIndex={'overlay'}
    color="current"
    marginLeft="2"
    onClick={toggleColorMode}
    icon={<SwitchIcon />}
    {...props}
    />

    
)

}

export default ColorModeSwitcher;