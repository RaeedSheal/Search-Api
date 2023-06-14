import { Image, Flex, Text, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Animalinfo = () => {
    const [animal, setAnimal] = useState({ name: "", avatar: "", info: "" });
    const url = "https://6486ccf3beba6297278f2f89.mockapi.io/pictures";
    const id = useParams();
    useEffect(() => {
        axios.get(url + `/${id.id}`).then((res) => {
            setAnimal(res.data);
        });
    }, []);
    return (
        <>
            <Navbar />
            <Flex flexDir={"column"} alignItems={"center"}>
                <Image src={animal.avatar} />
                <Heading>{animal.name}</Heading>
                <Text>{animal.info}</Text>
            </Flex>
        </>
    );
};

export default Animalinfo;
