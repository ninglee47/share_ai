'use client'
 import { useState } from 'react'
 import { Box, Button, Center, Text, Textarea } from '@chakra-ui/react'

 import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  border: '2px dashed', // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: 'semibold', // change the font weight
})

function Prompt() {
    let [value, setValue] = useState('')
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Text mb='8px' color={'#E6E0E9'}>Value: {value}</Text>
        <Box marginBottom={'15px'}>
        <Text mb='8px' color={'#E6E0E9'}>Prompt</Text>
        <Textarea
          backgroundColor={'#2B2930'}
          value={value}
          onChange={handleInputChange}
          placeholder='dd objects, colors, places, characters...'
          size='xl'
          colorScheme={'linkedin'}
          w={'312px'}
          h={'116px'}
          borderRadius={'5px'}
        />
        </Box>
        <Button w={'312px'} h={'40px'} backgroundColor={'#D0BCFF'} 
        colorScheme={'#D0BCFF'}  borderRadius={'12px'}>Generate</Button>
      </>
    )
  }

export default Prompt;