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
    const [promptValue, setPromptValue] = useState(null)
    const [keyValue, setKeyValue] = useState(null)
    const [responseData, setResponseData] = useState(null);

    let handlePromptInputChange = (e) => {
      let inputValue = e.target.value
      setPromptValue(inputValue)
    }

    let handleKeyInputChange = (e) => {
      let inputValue = e.target.value
      setKeyValue(inputValue)
    }

    const handleButtonClick = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/generateImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: promptValue, key: keyValue }),
        });
        const data = await response.json();
        console.log('resfrom', data)
        setResponseData(data);
      } catch (error) {
        console.error('Error sending POST request:', error);
      }
    };

    return (
      <>
        <Text mb='8px' color={'#E6E0E9'}>Value: {promptValue}</Text>
        <Box marginBottom={'15px'}>
        <Text mb='8px' color={'#E6E0E9'}>Prompt</Text>
        <Textarea
          backgroundColor={'#2B2930'}
          value={promptValue}
          onChange={handlePromptInputChange}
          placeholder='objects, colors, places, characters...'
          size='xl'
          colorScheme={'linkedin'}
          w={'312px'}
          h={'116px'}
          borderRadius={'5px'}
        />
        </Box>
        <Box marginBottom={'15px'}>
        <Text mb='8px' color={'#E6E0E9'}>Key</Text>
        <Textarea
          backgroundColor={'#2B2930'}
          value={keyValue}
          onChange={handleKeyInputChange}
          placeholder='api key'
          size='xl'
          colorScheme={'linkedin'}
          w={'312px'}
          h={'56px'}
          borderRadius={'5px'}
        />
        </Box>
        <Button w={'312px'} h={'40px'} backgroundColor={'#D0BCFF'} 
        colorScheme={'#D0BCFF'}  borderRadius={'12px'} onClick={handleButtonClick}>Generate</Button>
      </>
    )
  }

export default Prompt;