import {
	Box,
	Badge,
	Link,
	List,
	ListItem,
	Heading,
	Center,
    Flex,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta, WorkImage } from "../../components/Work";
import P from "../../components/Paragraph";
import Layout from "../../components/layouts/Articles";

const ImageSize = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} style={{ width, height }} />;
};

const Work = () => (
	<Layout title="3xpense">
		<Box>
			<Title>
				3xpense <Badge bg ="blue">March 2022 - Oct 2022</Badge>
			</Title>
			<P style={{ fontSize: '14px' }}>
			With 3xpense, it allows users to track what they earn as well as what they spend. With 3Xpense, users can become their own money managers by constantly manually recording their expenses and income to see where their money is going to have a better insight an overview of their budget.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Android</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Kotlin</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
			</Heading>

			<div className="space-y-8">
                <Flex justify="center">
				<WorkImage src="/images/NDA.jpg" alt="suburbstn" />
                </Flex>
            </div>
		</Box>
	</Layout>
);

export default Work;
