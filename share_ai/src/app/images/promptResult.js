
import { Box, Button, Center, Text, VStack, Image } from '@chakra-ui/react'
import { useState, useEffect  } from 'react'

const PromptResult = ({ inferenceId }) => {
    //let imgs = []
    let reqId = inferenceId
    const [imgs, setImgs] = useState([])
    
    // const timterId = setInterval ( async () => {
    //     setImgs(await getImagesFromIntance(inferenceId))
    //     if (imgs.length !== 0) {
    //       clearInterval(timterId)
    //     }
    //   }, 2000)
    
      useEffect(() => {
        async function getImagesFromIntance(inferenceId) {
            try {
              const queryParams = new URLSearchParams({
                inferenceId: inferenceId,
              });
              const response = await fetch(`http://localhost:3001/api/getImagesOfIntance?${queryParams}`);
              const data = await response.json();
              console.log(data.inference.images);
              return data.inference.images;
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        }
        console.log('prompt, id:', inferenceId)
        let timerId;
        
        if (inferenceId) {
            const id = inferenceId.replace(/"/g, '');
            timerId = setInterval ( () => {
                console.log('Fetching...',id)
                getImagesFromIntance(id).then(
                    resImgs => {
                      
                      if (resImgs.length !== 0) {
                      setImgs(resImgs);
                    }}
                )
                
           }, 2000)
        }
        
        return () => clearInterval(timerId) 
      }, [setImgs, inferenceId]); 

    return (
      <>
        {inferenceId}
        
        <VStack>
            { 
              imgs.length !== 0 ? imgs?.map((img, index) => (
                <Image key={index} src={img.url} />
              )) : <Box></Box>
            }
               
        </VStack>
      </>
    )
  }

export default PromptResult;