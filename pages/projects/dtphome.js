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
import { Title, Meta, WorkImage } from "../../components/Work";
import P from "../../components/Paragraph";
import Layout from "../../components/layouts/Articles";
import Image from "next/image";

const ImageSize = ({ src, alt, width, height }) => {
	return <Image src={src} alt={alt} width={width} height={height} />;
};

const Work = () => (
	<Layout title="DTP">
		<Box>
			<Title>
				Decentralized Trading Platform <Badge bg="blue">August 2023 - Nov 2023</Badge>
			</Title>
			<P style={{ fontSize: "14px" }}>
				Throughout one of my course unit, i&apos;ve successfully created a robust Decentralized Trading Platform. By harnessing the power of React.js, enhanced by the MaterialUI framework, the platform boasts a responsive and visually captivating user interface. React&apos;s dynamic capabilities, combined with MaterialUI&apos;s vast component library, ensured a streamlined and user-friendly frontend experience. The backend, powered by FastAPI, adeptly manages database connections, ensuring efficient data retrieval and storage. This seamless integration between front and back ends guarantees a fluid user journey across the platform. A cornerstone of the project&apos;s decentralization aspect is the incorporation of Solidity for smart contract development. These contracts are the driving force behind the platform&apos;s ability to facilitate peer-to-peer trading of digital assets, eliminating the need for intermediaries and championing transparency and trust.
			</P>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Anaconda</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Solidity, React, NextJS, FastAPI, Python, Web3, Truffle, SQL, MaterialUI</span>
				</ListItem>
			</List>

			<Heading as="h4" fontSize={16} my={8}>
				<Center>Project Showcase</Center>
			</Heading>

			<div className="space-y-8">
				<Box>
					<iframe
						alt="DTP"
						src="https://youtu.be/Z-p6k1bYtzc"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						width="100%"
						height="400"
						frameBorder="0"
						allowFullScreen
					/>
				</Box>
			</div>
		</Box>
	</Layout>
);

export default Work;
