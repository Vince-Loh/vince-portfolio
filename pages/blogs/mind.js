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
import { Title, blogTitle, Meta, WorkImage } from "../../components/Work";
import P from "../../components/Paragraph";
import Layout from "../../components/layouts/Articles";

const ImageSize = ({ src, alt, width, height }) => {
    return <img src={src} alt={alt} style={{ width, height }} />;
};

const Blog = () => (
	<Layout title="mind">
		<Box>
			<Title>
				What&apos;s top of my mind? <Badge bg ="blue">25 Dec 2023</Badge>
			</Title>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Author</Meta>
					<span>Vince</span>
				</ListItem>
				<ListItem>
					<Meta>Date</Meta>
					<span>25 December 2023</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Stuff I&apos;m focused on thinking about.</Center>
			</Heading>

               <P>
                    <li>How can I harness tech to help people with ADHD like myself?</li>
                    <li>How might I use spaced repetition to program my future self`&apos;`s attention?</li>
                    <li>How can I better experiment with solutions to help myself?</li>
                    <li>How can I create an enabling environment for myself?</li>
                    <li>How can I build a symbiotic economic engine so I can keep working on the above?</li>
                </P>
		</Box>
	</Layout>
);

export default Blog;
