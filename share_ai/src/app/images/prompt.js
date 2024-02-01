'use client'
 import { useState } from 'react'
 import { Box, Button, Text, Textarea } from '@chakra-ui/react'

function Prompt() {
    let [value, setValue] = useState('')
  
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Text mb='8px' color={'#E6E0E9'}>Value: {value}</Text>
        <Box>
        <Text mb='8px' color={'#E6E0E9'}>Prompt</Text>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Here is a sample placeholder'
          size='sm'
          color={'#938F99'}
        />
        </Box>
        
        <Button colorScheme={'#D0BCFF'} variant='solid' size={'md'}>Generate</Button>
      </>
    )
  }

export default Prompt;