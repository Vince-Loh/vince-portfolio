import { Box, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem, SimpleGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Articles";
import Section from "../components/Section";

// Importing thumbnails
import mind from "../public/images/whatsmind.png";

const dailyBlog = [
	{
		id: "mind",
		title: "Whats on my mind?",
		thumbnail: mind,
		description:
			"25/12/2023",
		delay: 0.1,
		backgroundColor: "#222", 
	},
];

const renderBlog = (blogs) =>
    blogs.map((blogs) => (
		<Section delay={blogs.delay} key={blogs.id}>
			<SimpleGridItem
				id={blogs.id}
				title={blogs.title}
				thumbnail={blogs.thumbnail}
				backgroundColor={blogs.backgroundColor}
				padding={blogs.padding}>
				{blogs.description}
			</SimpleGridItem>
		</Section>
	));

const Blogs = () => (
	<Layout title="Blogs">
		<Box>
			<Heading as="h3" variant="section-title" fontSize={20} mb={4}>
				Blogs
			</Heading>
			<SimpleGrid columns={[1, 1, 1, 1]} gap={6}>
				{renderBlog(dailyBlog)}
			</SimpleGrid>

			<Divider my={6} />
		</Box>
	</Layout>
);

export default Blogs;
