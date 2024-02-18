import { Box, Center, Grid, Heading, Text, HStack ,VStack } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export const HomePage = () => (
     <Grid minH="100vh">
     <HStack w="full" spacing={2} align="flex-start" backgroundColor={'#141218'}>
        <VStack backgroundColor={'#141218'} h="full" w={'80px'} marginTop={'50px'}>
          <Link as={NextLink} href='/'>
          <Box marginBottom={'10px'}>
            <Center>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" fill="#E8DEF8"/>
              </svg>
            </Center>
            <Text color={'#E6E0E9'}>Home</Text>
          </Box>
          </Link>

          <Link as={NextLink} href='/models'>
          <Box marginBottom={'10px'}>
            <Center>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.99 19.005L4.62 13.275L3 14.535L12 21.535L21 14.535L19.37 13.265L11.99 19.005ZM12 16.465L19.36 10.735L21 9.46503L12 2.46503L3 9.46503L4.63 10.735L12 16.465ZM12 4.99503L17.74 9.46503L12 13.935L6.26 9.46503L12 4.99503Z" fill="#CAC4D0"/>
              </svg>
            </Center>
          <Text color={'#E6E0E9'}>Models</Text>
          </Box>
          </Link>
          
          <Link as={NextLink} href='/images'>
          <Box marginBottom={'10px'}>
            <Center>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="#CAC4D0"/>
              </svg>
            </Center>
            <Text color={'#E6E0E9'}>Images</Text>
          </Box>
          </Link>

          <Link as={NextLink} href='/profiles'>
          <Box>
            <Center>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5Z" fill="#CAC4D0"/>
              </svg>
            </Center>
            <Text color={'#E6E0E9'}>Profile</Text>
          </Box>
          </Link>
        </VStack>
        
        <VStack w="100%" h="98%" alignItems={'left'} backgroundColor={'#2B2930'} margin={'5px'} padding={'10px'}
        borderRadius={'5px'}>
            <Box>
              <Text as={'b'} fontSize='30px' color={'#E6E0E9'}>Generate your images using artist models</Text>
            </Box>
            <Box >
              <Text as={'b'} fontSize='30px' color={'#E6E0E9'}>Choosing models</Text>
            </Box>
        </VStack>
     </HStack>
     </Grid>
   )
   