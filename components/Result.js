import { Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

const Result = ({ name, link, image }) => (
    <Link href={link} isExternal outline="none">
        <Box
            backgroundColor="white"
            p="2em"
            borderRadius="2em"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="md"
            display="flex"
            flexDir="column"
            alignItems="center"
            _hover={{
                borderColor: "purple.500",
                boxShadow: "xl",
                cursor: "pointer",
            }}
            transition="box-shadow 0.3s, border 0.3s"
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
    </Link>
);

export default Result;
