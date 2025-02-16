import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { WorkGridItem } from "../GridItem";
import suburbsolution from "../../public/images/works/suburbsolutions.png";
import dtpHome from "../../public/images/works/dtp_home.png";
import archery from "../../public/images/works/archery_rounds.png";
import portfolio from "../../public/images/works/portfolio_home.png";

export default function FeaturedProjects() {
	return (
		<>
			<Heading as="h3" variant="section-title" fontSize={24}>
				Projects
			</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={6}>
				<WorkGridItem
					id="suburbsolution"
					thumbnail={suburbsolution}
					title="Tool for Property Investments"
					>
					Sophiscated and user-centric solutions that provides real estate data and analytics in Australia
				</WorkGridItem>
				<WorkGridItem
					id="portfolio"
					title="Portfolio"
					thumbnail={portfolio}>

A dynamic portfolio built with React.js, showcasing projects, resume, and experiences. Features include responsive design, smooth scrolling, and a blog.
Hosted on AWS (S3, CloudFront), with a CI/CD pipeline using CodePipeline and CodeBuild, ensuring automated deployment from GitHub.
				</WorkGridItem>
				<WorkGridItem 							
					id="archery"
					thumbnail={archery}
					title="Archery Scoring">
					Streamline scoring processes, maintain accurate records, and gain
					valuable insights into archer performance.
				</WorkGridItem>
			</SimpleGrid>
			<Box align="center" my={4}>
				<NextLink href="/projects">
					<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
						View All Works
					</Button>
				</NextLink>
			</Box>
		</>
	);
}
