import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Animalcard from "./Animalcard";
import { Grid, Input, Box } from "@chakra-ui/react";

const Pictures = () => {
    const [pics, setPics] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const url = "https://6486ccf3beba6297278f2f89.mockapi.io/pictures";
    useEffect(() => {
        axios.get(url).then((res) => {
            setPics(res.data);
        });
    }, []);
    const returnInputData = (searchInput, pictures) => {
        if (!searchInput) {
            return pictures;
        }

        const e = pictures.filter((pic) => {
            if (searchInput == "") return pic;
            else if (pic.name.toLowerCase().includes(searchInput.toLowerCase()))
                return pic;
        });
        return e;
    };
    const filteredItems = returnInputData(searchInput, pics);
    return (
        <>
            <Navbar />
            <Box m={4}>
                <Input
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                ></Input>
            </Box>

            <Grid
                gap={4}
                templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
                m={4}
            >
                {filteredItems.map((card) => {
                    return (
                        <Animalcard
                            key={card.id}
                            name={card.name}
                            img={card.avatar}
                            id={card.id}
                        />
                    );
                })}
            </Grid>
        </>
    );
};

export default Pictures;
