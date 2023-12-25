import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

/*"export const blogTitle = ({ children }) => (
	<Box>
		<NextLink href="/blogs">
			<Link>Blogs</Link>
		</NextLink>
		<span>
			{" "}
			<ChevronRightIcon />{" "}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
);*/

export const Title = ({ children }) => (
	<Box>
		<NextLink href="/projects">
			<Link>Back</Link>
		</NextLink>
		<span>
			{" "}
			<ChevronRightIcon />{" "}
		</span>
		<Heading display="inline-block" as="h3" fontSize={20} mb={4}>
			{children}
		</Heading>
	</Box>
);


export const WorkImage = ({ src, alt }) => (
	<Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta = ({ children }) => (
	<Badge bg="green" mr={2} >
		{children}
	</Badge>
);
