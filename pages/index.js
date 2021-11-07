import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import Result from "../components/Result";
import data from "./data/data.json";

const Home = () => {
    const [technologies, setTechnologies] = useState(
        [
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
            {
                name: "Django",
                image: "/django.png",
                selected: false,
            },
            {
                name: "Drupal",
                image: "/drupal.png",
                selected: false,
            },
            {
                name: "Ember",
                image: "/ember.png",
                selected: false,
            },
            {
                name: "Express",
                image: "/express.png",
                selected: false,
            },
            {
                name: "jQuery",
                image: "/jquery.png",
                selected: false,
            },
            {
                name: "Laravel",
                image: "/laravel.png",
                selected: false,
            },
            {
                name: "Ruby on Rails",
                image: "/ruby_rails.png",
                selected: false,
            },
        ].sort((a, b) => a.name.localeCompare(b.name)) // sort lexicographically
    );
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
    const selectedTechnologies = technologies
        .filter((tech) => tech.selected) // remove non selected elements
        .map((tech) => tech.name); // get names
    const companies = data.companies.map((company) => {
        // display only companies with common tags as selected
        return company.tags.some((tech) =>
            selectedTechnologies.includes(tech)
        ) ? (
            <Result
                name={company.name}
                link={company.link}
                image={company.img}
            />
        ) : null;
    });
    return (
        <Box height="100%" backgroundColor="white" p="10%">
            <Heading color="black" size="3xl">
                What Can I Build With My Tech?
            </Heading>
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
            <Heading color="black" size="2xl">
                What Can I Build With{" "}
                {selectedTechnologies
                    ? selectedTechnologies.join(" and ")
                    : "___"}{" "}
                ?
            </Heading>
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
                {companies}
            </Grid>
        </Box>
    );
};

export default Home;
