import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Divider,
    CardFooter,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Animalcard = (props) => {
    return (
        <>
            <Card maxW="sm" align={"center"}>
                <CardBody>
                    <Image
                        src={props.img}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">{props.name}</Heading>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Link to={`/pictures/${props.id}`}>
                            <Button variant="solid" colorScheme="blue">
                                More Info
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    );
};

export default Animalcard;
