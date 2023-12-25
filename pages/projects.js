import { Box, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Articles";
import Section from "../components/Section";

// Importing thumbnails
import suburbsolutions from "../public/images/works/suburbsolutions.png";
import expensemain from "../public/images/works/3xpense_main.png";
import archery from "../public/images/works/Archery_DB.png";
import mastermind from "../public/images/works/Mastermind_ARMLite.png";
import dtphome from "../public/images/works/dtp_home.png";

const passionProjects = [
	{
		id: "suburbsolution",
		title: "Suburb Solutions",
		thumbnail: suburbsolutions,
		description:
			"A tool for property investors or buyers to find the best suburbs to invest in",
		delay: 0.1,
		backgroundColor: "white",
		padding: "1rem",
	},
	{
		id: "expensemain",
		title: "3xpense",
		thumbnail: expensemain,
		description:
			"A mobile application to allow users to have the ability to manage their money well in a single click.",
		delay: 0.1,
	},
	{
		id: "archery",
		title: "Archery Scoring System",
		thumbnail: archery,
		description: "An archery scoring system to Streamline scoring processes, maintain accurate records, and gain valuable insights into archer performance. ",
		delay: 0.1,
	},
	{
		id: "mastermind",
		title: "ARM Mastermind Game",
		thumbnail: mastermind,
		description:
			"Coded a Mastermind game using ARM Assembly Language.",
		delay: 0.1,
	},
	{
		id: "dtphome",
		title: "Decentralized Trading Platform",
		thumbnail: dtphome,
		description:
			"Explored the use of blockchain technology to create a decentralized trading platform for user transactions.",
		delay: 0.1,
	},
];

const renderProjects = (projects) =>
	projects.map((project) => (
		<Section delay={project.delay} key={project.id}>
			<WorkGridItem
				id={project.id}
				title={project.title}
				thumbnail={project.thumbnail}
				backgroundColor={project.backgroundColor}
				padding={project.padding}>
				{project.description}
			</WorkGridItem>
		</Section>
	));

const Works = () => (
	<Layout title="Works">
		<Box>
			<Heading as="h3" variant="section-title" fontSize={20} mb={4}>
				Passion Projects
			</Heading>
			<SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
				{renderProjects(passionProjects)}
			</SimpleGrid>

			<Divider my={6} />
		</Box>
	</Layout>
);

export default Works;
