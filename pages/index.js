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

export default function Home() {
	return (
		<Layout>
			<Container maxW="full">
				<Section delay={0.1}>
					<Heading as="h3" variant="section-title">
						About me
					</Heading>
					<Paragraph>
						Vince is a student at Swinburne University of Technology in Melbourne, studying Bachelor of Computer Science and
						majoring in Software Development. He is a software developer with a
						passion for building things that look and feel good. He enjoys
						learning new technologies and has a knack for solving real life
						problems with code. When he is not coding, he loves gaming,
						watching videos on programming or tinkering with computers.
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
						<WorkGridItem id="dtp" title="Decentralized Trading Platform" thumbnail={dtpHome}>
							The Decentralized Trading Platform for user transactions
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
							<Link href="https://www.linkedin.com/in/vince-loh-10146a1a2/" target="_blank">
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
