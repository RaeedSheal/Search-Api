import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Profile() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [user] = useState({
        username: "",
        email: "",
        password: "",
        id: "",
    });
    const id = useParams();
    const url = `https://6486ccf3beba6297278f2f89.mockapi.io/users/${id.id}`;
    let found = {};

    useEffect(() => {
        getUser();
    }, []);

    // Get User then add them to user usestate
    const getUser = async () => {
        found = await axios.get(url);
        user.username = found.data.username;
        user.password = found.data.password;
        user.email = found.data.email;
        user.id = found.data.id;
    };

    //Button Update
    const Change = async () => {
        await axios.put(url, user);
    };
    const Delete = async () => {
        await axios.delete(url);
        navigate("/");
    };

    return (
        <>
            {" "}
            <Navbar />
            <Flex
                minH={"100vh"}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                    <Stack align={"center"}>
                        <Heading fontSize={"4xl"} textAlign={"center"}>
                            Profile
                        </Heading>
                    </Stack>
                    <Box
                        rounded={"lg"}
                        bg={useColorModeValue("white", "gray.700")}
                        boxShadow={"lg"}
                        p={8}
                    >
                        <Stack spacing={4}>
                            {/* USERNAME */}
                            <FormControl id="username">
                                <FormLabel>Username</FormLabel>
                                <Input
                                    type="text"
                                    onChange={(e) => {
                                        user.username = e.target.value;
                                    }}
                                />
                            </FormControl>
                            {/* Email */}
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="email"
                                    onChange={(e) => {
                                        user.email = e.target.value;
                                    }}
                                />
                            </FormControl>
                            {/* PASSWORD */}
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        onChange={(e) => {
                                            user.password = e.target.value;
                                        }}
                                    />
                                    <InputRightElement h={"full"}>
                                        <Button
                                            variant={"ghost"}
                                            onClick={() =>
                                                setShowPassword(
                                                    (showPassword) =>
                                                        !showPassword
                                                )
                                            }
                                        >
                                            {showPassword ? (
                                                <ViewIcon />
                                            ) : (
                                                <ViewOffIcon />
                                            )}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={"blue.400"}
                                    color={"white"}
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={() => Change()}
                                >
                                    Update
                                </Button>
                            </Stack>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"red.400"}
                                color={"white"}
                                _hover={{
                                    bg: "red.500",
                                }}
                                onClick={() => Delete()}
                            >
                                Delete
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}
