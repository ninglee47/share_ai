'use client'
import { Box, Image, Text } from '@chakra-ui/react'

function ModelBox({data}) {
  return(
    <Box>
        <Image src={data.imgSrc} h={"300px"}/>
        <Text fontSize='15px' color={'#E6E0E9'}>{data.imgDes}</Text>
    </Box>
  )
}

export default ModelBox;