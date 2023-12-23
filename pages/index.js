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
import { AiTwotoneMail } from "react-icons/ai";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { WorkGridItem } from "../components/GridItem";
import Layout from "../components/layouts/Articles";
import Paragraph from "../components/Paragraph";
import Section from "../components/Section";
import thumbMarkbind from "../public/images/works/markbind_01.png";
import thumbNusConnect from "../public/images/works/nusconnect_03.png";
import thumbSqueezy from "../public/images/works/squeezy_01.png";
import thumbAmuze from "../public/images/works/amuze_01.png";
import aws from "../public/images/works/AWS.png";


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
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Resume
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.3}>
					<Heading as="h3" variant="section-title">
						Recent Projects
					</Heading>
					<SimpleGrid columns={[1, 2, 3]} gap={6}>
						<WorkGridItem
							id="squeezy"
							thumbnail={thumbSqueezy}
							title="Project Squeezy (Won 2nd Place)">
							Squeeze your stress away with this smart Stress-Ball!
						</WorkGridItem>
						<WorkGridItem
							id="amuze"
							title="Amuze (1st Runner Up)"
							thumbnail={thumbAmuze}>
							The NFT museum for collectors rent, mint and earn!
						</WorkGridItem>
						<WorkGridItem
							id="markbind"
							thumbnail={thumbMarkbind}
							title="Markbind">
							A tool for generating static websites from Markdown-like syntax.
						</WorkGridItem>
					</SimpleGrid>
					<Box align="center" my={4}>
						<NextLink href="/works">
							<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
								My Projects
							</Button>
						</NextLink>
					</Box>
				</Section>

				<Section delay={0.5}>
					<Heading as="h3" variant="section-title">
						Certificates
					</Heading>
					<Paragraph>
						<Box align="center" my={4}>
							
							<Link href="https://www.youracclaim.com/badges/6b6b6b6b-0b0b-4b6b-8b6b-6b6b6b6b6b6b/public_url" target="_blank">
								<Button
									variant="link"
									colorScheme="blue"
									>
									<img src={{aws}} alt="AWS" />
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
							<Link href="https://github.com/ong6" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={IoLogoGithub} />}>
									@Vince
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="https://www.linkedin.com/in/junx6/" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									marginTop={2}
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={IoLogoLinkedin} />}>
									@Vince-Loh
								</Button>
							</Link>
						</ListItem>
						<ListItem>
							<Link href="mailto:junxiongong2@gmail.com" target="_blank">
								<Button
									variant="outline"
									colorScheme="blue"
									marginTop={2}
									_hover={{ bgColor: "blue", color: "white" }}
									leftIcon={<Icon as={AiTwotoneMail} />}>
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
