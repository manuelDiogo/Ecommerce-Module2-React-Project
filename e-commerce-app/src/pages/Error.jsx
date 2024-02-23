import { Card, CardBody, Text , Button} from "@chakra-ui/react";
import { Link as ReactRouterLink} from "react-router-dom";
function Error () {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Ensures that the card is centered vertically
          }}>
            <Card>
              <CardBody  display= 'flex' flexDirection="column" alignItems= 'center' >
                <Text fontSize="30px"  color="black"
                            fontWeight='bold'>Error!!! Page Not Found. To continue shopping click on home button. </Text>
                <Button colorScheme="teal" width="20%"size="lg"  as={ReactRouterLink} to="/home">
            Home
          </Button>
              </CardBody>
            </Card>
          </div>
    )
}
export default Error;














