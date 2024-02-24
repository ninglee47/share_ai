import { Box, Center, Grid, Text,VStack} from "@chakra-ui/react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export const HomePage = () => (
    <Grid minH="100vh" w="full" align="flex-start" backgroundImage={"/landback.png"} backgroundSize={'cover'} opacity={'0.9'}>
      <Center >
      <VStack>
        <Link as={NextLink} href='/home'>
          <Box>
            <Text as={'b'} fontSize='40px' color={'#E6E0E9'}>Share-Ai</Text>
          </Box>
        </Link>
        <Box>
          <Text as={'b'} fontSize='15px' color={'#E6E0E9'}>pre-Alpha</Text> 
        </Box>
      </VStack>
      </Center>
    </Grid>
   )
   