import { Box, Grid, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";

const Home = () => {
    const [technologies, setTechnologies] = useState([
        {
            name: "React",
            image: "/react.png",
            selected: false,
        },
        {
            name: "Angular",
            image: "/angular.png",
            selected: false,
        },
        {
            name: "Vue",
            image: "/vue.png",
            selected: false,
        },
        {
            name: "Bootstrap",
            image: "/bootstrap.png",
            selected: false,
        },
        {
            name: "Chakra UI",
            image: "/chakra.png",
            selected: false,
        },
    ]);
    // toggle selected attribute of the array based on key
    const toggleSelected = (key) => {
        setTechnologies(
            // map new updated state within setState to prevent shallow copying state
            technologies.map((tech, index) => ({
                name: tech.name,
                image: tech.image,
                selected: key == index ? !tech.selected : tech.selected,
            }))
        );
    };
    const technologyList = technologies.map((tech, index) => (
        <Card
            name={tech.name}
            image={tech.image}
            selected={tech.selected}
            index={index}
            key={index.toString()}
            data={technologies}
            toggleSelected={toggleSelected}
        />
    ));

    return (
        <Box height="100%" backgroundColor="white" p="10%">
            <Heading color="black">What Can I Build With My Tech?</Heading>
            <Grid
                templateColumns={[
                    "repeat(1, 1fr)",
                    null,
                    "repeat(3, 1fr)",
                    "repeat(4, 1fr)",
                ]}
                gap={6}
                my="5em"
            >
                {technologyList}
            </Grid>
        </Box>
    );
};

export default Home;
