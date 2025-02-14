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
	<Layout title="Proproo">
		<Box>
			<Title>
				Proproo <Badge bg="blue">January 2024 - Present</Badge>
			</Title>
			<P style={{ fontSize: '14px' }}>
            Proproo is an innovative online platform designed to streamline property management and real estate transactions across Australia. The website, accessible at{" "}
                <Link href="https://proproo.com.au" isExternal color="teal.500">
                    here <ExternalLinkIcon mx="2px" />
                </Link>, provides users with comprehensive tools for property listings, analytics, and seamless user interactions. The platform is built to offer a modern, responsive experience, making it easy for property owners and prospective buyers to connect and manage property-related information efficiently.
            </P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Web</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>React, Next.js, Chakra UI, Node.js, PostgreSQL, Fly.io, Python</span>
				</ListItem>
				<ListItem>
					<Meta>Features</Meta>
					<span>Property Listings, Analytics Dashboard, User Management, Responsive Design, Investment Calculator</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
                
			</Heading>

			<div className="space-y-8">
				<WorkImage src="/images/works/proproo_home.png" alt="Proproo Home Page" />
			</div>
		</Box>
	</Layout>
);

export default Work;
