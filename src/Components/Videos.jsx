import { Heading, Stack, VStack ,Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Videos = () =>{
    const videosArr = [
        'https://player.vimeo.com/external/440214116.sd.mp4?s=775e1d151a615965889750f507d3d29135092a98&profile_id=164&oauth2_token_id=57447761',
       'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
       'https://player.vimeo.com/external/436375789.sd.mp4?s=a5f19d627bbf279bf01f12e7ca4f14d847ee30c5&profile_id=164&oauth2_token_id=57447761',
       'https://player.vimeo.com/external/555179829.sd.mp4?s=8b3488922181b5c30d8adf2eb4bed9215ea8d638&profile_id=164&oauth2_token_id=57447761',
       'https://player.vimeo.com/external/542883538.sd.mp4?s=ce3d209048d6403bd59a4a1e9d4bcd92e9bec51b&profile_id=164&oauth2_token_id=57447761',
       'https://player.vimeo.com/external/500628042.sd.mp4?s=1aef9b2062713668cff84486e90ed511329cc31e&profile_id=165&oauth2_token_id=57447761'
    ]

    const[videoSrc , setvideoSrc] = useState(videosArr[0]);


    return(
        <>
        
        <Stack direction={['column' , 'row']} h={['auto' , '100vh']}>

      <VStack w={'full'} h={'full'}>
       <video 
       controls
       controlsList="nodownload"
       src={videoSrc}
       style={{
        width:'100%',
        height:'500px'
       }}
       
       ></video>
   <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'}>
    
    <Heading> Sample Video 1</Heading>
    <Text>This is a sample video for testing and demo , this is called description</Text>
   </VStack>

      </VStack  >

      <VStack w={['full','xl']} alignItems={"stretch"} p={'8'} spacing={'8'} overflow={'auto'}>

      
      {videosArr.map((item,index) =>(

            <Button variant={"ghost"} colorScheme="purple"
            onClick={() => setvideoSrc(item)} >
            Lecture {index+1}
        </Button>

      ))

      };

      </VStack>

        </Stack>
        
        </>
    )
}

export default Videos;