import { Box, Text, Button } from "@chakra-ui/react";
import Image from "next/image";

const Card = ({ name, image, selected, index, data, toggleSelected }) => {
    return (
        <Box
            backgroundColor="white"
            p="2em"
            borderRadius="2em"
            border="1px solid"
            borderColor={selected ? "purple.500" : "gray.200"}
            boxShadow={selected ? "xl" : "md"}
            display="flex"
            flexDir="column"
            alignItems="center"
            _hover={{
                borderColor: "purple.500",
                boxShadow: "xl",
                cursor: "pointer",
            }}
            transition="box-shadow 0.3s, border 0.3s"
            onClick={() => toggleSelected(index)} // passed down from parent
        >
            <Box borderRadius="1em">
                <Image
                    src={image}
                    objectFit="contain"
                    width="100em"
                    height="100em"
                ></Image>
            </Box>
            <Text fontSize="2xl" color="gray.500">
                {name}
            </Text>
        </Box>
    );
};

export default Card;
