'use client'
import { Box, Image, Text } from '@chakra-ui/react'

function ModelBox({data}) {
  return(
    <Box>
        <Image src={data.imgSrc} />
        <Text>{data.imgDes}</Text>
    </Box>
  )
}

export default ModelBox;