import { Button, Flex, Image } from '@chakra-ui/react'
import mapView from '../../../assets/mapView.png'

function Map() {
  return (
    <Flex position='relative'>
      <Image src={mapView} alt="Map View" />
      <Button bg="#1C3519" color="white" position='absolute' top='5%' left='1%'>
        View Larger Map
      </Button>
    </Flex>
  );
}

export default Map;