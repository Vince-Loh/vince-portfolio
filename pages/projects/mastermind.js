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
import Image from "next/image";

const ImageSize = ({ src, alt, width, height }) => {
	return <Image src={src} alt={alt} width={width} height={height} />;
};

const Work = () => (
	<Layout title="Mastermind">
		<Box>
			<Title>
				Mastermind <Badge bg="blue">Feb 2022 - July 2022</Badge>
			</Title>
			<P style={{ fontSize: "14px" }}>
				Developed a simple mastermind game using ARM Assembly Language in which users have to input their name, number of guess and guess the colour by typing a maximum of 4 character code with each code meaning for r-red, g-green, b-blue, y-yellow, p-purple and c-cyan.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>ARMLite</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Assembly Programming</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
			</Heading>

			<div className="space-y-8">
				<WorkImage src="/images/works/ARM1.png" alt="suburbstn" />
				<WorkImage src="/images/works/ARM2.png" alt="suburbstn" />
				<WorkImage src="/images/works/ARM3.png" alt="suburbstn" />
				<WorkImage src="/images/works/ARM4.png" alt="suburbstn" />
			</div>
		</Box>
	</Layout>
);

export default Work;
