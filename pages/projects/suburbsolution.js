import {
	Box,
	Badge,
	Link,
	List,
	ListItem,
	Heading,
	Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/Work";
import P from "../../components/Paragraph";
import Layout from "../../components/layouts/Articles";

const Work = () => (
	<Layout title="Suburb Solutions">
		<Box>
			<Title>
				$Suburb Solutions <Badge bg ="blue">March 2023 - Nov 2023</Badge>
			</Title>
			<P style={{ fontSize: '14px' }}>
			The starting point of this project can be attributed to the growing demand for a more sophisticated and user-centric solution in the real estate domain.
			While there were existing platforms like CoreLogic that provided real estate data and analytics, the client identified the need for a more comprehensive and personalized tool that could offer users an enhanced experience, including features like interactive maps and data filtering.
			Hence, our team have created a web application that uses Domain.com.au APIs to offer insightful analysis and financial advice for real estate investment within the Australian property market.  
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Docker, AWS</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>React, Python, tailwindCSS, NextJS, Domain API</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
			</Heading>

			<div className="space-y-8">
				<Box>
					<iframe
						alt="App Demo"
						src="/images/works/appdemo.mp4"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						width="100%"
						height="400"
						frameBorder="0"
						allowFullScreen
					/>
				</Box>
				<WorkImage src="/images/works/suburbsolutions.png" alt="suburbstn" />
			</div>
		</Box>
	</Layout>
);

export default Work;
