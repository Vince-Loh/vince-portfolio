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
	<Layout title="Next_Gen">
		<Box>
			<Title>
				Next_Gen <Badge bg ="blue">March 2023 - July 2023</Badge>
			</Title>
			<P style={{ fontSize: '14px' }}>
			This is a custom project that i have did during one of my course unit in my university.
			It is an Archery Scoring System, where clubs can easily set up the tournament details,
			define the rounds and categories, and register participating archers. During the tournament, scorers can quickly record arrow scores for
			each end using the system&apos;s intuitive interface. The scores are instantly calculated, and real-time leaderboards can be displayed for
			participants and spectators. After the tournament, the club administrators can generate detailed reports to analyze the performance of
			individual archers, identify top performers, and track improvements over time. The system simplifies the scoring process, reduces manual
			errors, and provides accurate results for a fair and enjoyable competition.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>WinSCP </span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>HTML, PostgreSQL, VueJS</span>
				</ListItem>
				<ListItem>
					<Meta>Features</Meta>
					<span>Club Recorder Management, Round Management, Category Management, Score Recording</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
			</Heading>

			<div className="space-y-8">
				<WorkImage src="/images/works/archery_cat.png" alt="under-repair" />
				<WorkImage src="/images/works/archery_rounds.png" alt="under-repair" />
				<WorkImage src="/images/works/archery_score.png" alt="under-repair" />
			</div>
		</Box>
	</Layout>
);

export default Work;
