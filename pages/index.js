import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Container,
	Heading,
	Icon,
	Link,
	List,
	ListItem,
	SimpleGrid,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { WorkGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Articles";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import archery from "../public/images/works/archery_score.png";
import suburbsolution from "../public/images/works/suburbsolutions.png";
import dtpHome from "../public/images/works/dtp_home.png";
import proproo from "../public/images/works/proproo_home.png";
import portfolio from "../public/images/works/portfolio_home.png";

export default function Home() {
	return (
		<Layout>
			<Container maxW="full">
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						About me
					</Heading>
					<Paragraph>
				I'm Vince, a Computer Science student at Swinburne University of Technology in Melbourne with a focus on Software Development. I have a passion for building software that not only works flawlessly but also offers a great user experience. I love exploring new technologies and tackling real-world challenges with creative code solutions.
				Whether I’m developing a new project, debugging a tricky issue, or even tinkering with computers in my spare time, I’m always eager to learn and grow as a developer. Gaming, tech videos, and experimenting with innovative ideas are some of the ways I unwind and stay inspired.
					</Paragraph>
					<Box align="center" my={4}>
						<NextLink href="/resume">
							<Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
								My Resume
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Recent Projects
					</Heading>
					<SimpleGrid
						columns={[1, 2, 3]}
						gap={6}
						boxShadow={"2xl"}
						borderRadius={"10px"}
						padding={"20px"}
					>
						<WorkGridItem
							id="suburbsolution"
							thumbnail={suburbsolution}
							title="Tool for Property Investments"
						>
							Sophiscated and user-centric solutions that provides real estate data and analytics in Australia
						</WorkGridItem>
						<WorkGridItem id="portfolio" title="Portfolio" thumbnail={portfolio}>
						A dynamic portfolio built with React.js, showcasing projects, resume, and experiences. Features include responsive design, smooth scrolling, and a blog.
        				Hosted on AWS (S3, CloudFront), with a CI/CD pipeline using CodePipeline and CodeBuild, ensuring automated deployment from GitHub.
						</WorkGridItem>
						<WorkGridItem id="proproo" thumbnail={proproo} title="Proproo Property Website">
							Proproo&apos;s website is one of the biggest project that I personally have ever done myself especially for the database, backend and frontend.
						</WorkGridItem>
					</SimpleGrid>
					<Box align="center" my={4}>
						<NextLink href="/projects">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Projects
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.5}>
					<Heading as="h3" variant="section-title">
						Certification
					</Heading>
					<Paragraph>
						<Box align="center" my={4}>
							<Image
								style={{ borderRadius: "20px" }}
								src="/images/works/AWS.png"
								alt="AWS"
								width={80}
								height={80}
							/>
							<br></br>
							<Link href="" target="_blank">
								<Button
									variant="link"
									textDecor={"underline"}
									color={"black"}
									marginTop={4}
								>
									AWS Certified Cloud Practitioner
								</Button>
							</Link>
						</Box>
					</Paragraph>
				</Section>

				<Section delay={0.7}>
					<Heading as="h3" variant="section-title">
						Contact me
					</Heading>
					<List>
						<ListItem>
							<Link href="https://github.com/Vince-Loh" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={IoLogoGithub} />}
								>
									@Vince
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://www.linkedin.com/in/vince-loh-3820a3315/" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									marginTop={2}
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={IoLogoLinkedin} />}
								>
									@Vince-Loh
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="mailto:vince.lohys@gmail.com" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									marginTop={2}
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={AiTwotoneMail} />}
								>
									@vince.lohys@gmail.com
								</Button>
							</Link>
						</ListItem>
					</List>
				</Section>
			</Container>
		</Layout>
	);
}
