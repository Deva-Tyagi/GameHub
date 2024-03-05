import React from "react";
import {Box, Container, Heading, Image, Stack ,Text} from "@chakra-ui/react";
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    padding:"4",
    size:"4xl"
}





const Home = () =>{
    return(
        <>
        
        <Box>
      
      <MyCarousel /> 
      
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading textTransform={"uppercase"} py={"2"} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>
            Services
        </Heading>

        <Stack
        h={'full'}
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
        >
            <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>

            <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} fontFamily={"cursive"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat facilis eveniet necessitatibus nemo inventore asperiores excepturi ut cumque error harum, aliquam natus soluta voluptatibus accusantium magni optio, vel dolorem voluptates voluptatem voluptate aliquid quod unde ex nesciunt? Sint harum saepe ut reiciendis doloremque dolorem, odit qui, modi fuga nesciunt repellat nemo suscipit illum recusandae dolorum ad cum accusamus corrupti maiores consectetur. Aliquid error ipsum doloribus eligendi in recusandae nostrum, quas commodi veritatis veniam repellendus accusamus culpa aut molestiae unde, quo, odit facere omnis facilis quae. Ad dolores possimus alias reiciendis eum eligendi maiores molestias, eius itaque perspiciatis, quod natus consequatur.
            </Text>

        </Stack>
      </Container>
        </Box>
</>
    )
        
    
};

const MyCarousel = () =>{
     return(

    <Carousel autoPlay
     infiniteLoop
      interval={2000}
       showStatus={false}
        showThumbs={false} 
         showArrows={false}
          >

<Box w={'100%'} h={'100vh'}>

<Image src={img1} h={'full'} w={'full'} objectFit={'cover'}/> 
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>

</Box>

<Box w={'100%'} h={'100vh'}>

<Image src={img2}  h={'full'} w={'full'} objectFit={'cover'} /> 
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future Is Gaming</Heading>

</Box>

<Box w={'100%'} h={'100vh'}>

<Image src={img3}  h={'full'} w={'full'} objectFit={'cover'} /> 
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming is console</Heading>

</Box>

<Box w={'100%'} h={'100vh'}>

<Image src={img4}  h={'full'} w={'full'} objectFit={'cover'} /> 
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Night with Gaming</Heading>

</Box>

    </Carousel>
     )

}

export default Home;