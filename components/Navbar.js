import Logo from "./Logo";
import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	IconButton,
	useColorModeValue,
} from "@chakra-ui/react";


const LinkItem = ({ href, path, _target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	const activeColor = useColorModeValue("#6b46c1", "#583ded");

	return (
		<NextLink href={href} passHref>
			<Link
				p={2}
				px={4}
				fontWeight="medium"
				fontSize="lg"
				textDecoration={active ? "underline" : "none"}
				color={active ? activeColor : inactiveColor}
				_hover={{ color: "#583ded" }}
				_focus={{ outline: "none" }}
				_target={_target}
				{...props}>
				{children}
			</Link>
		</NextLink>
	);
};

const Navbar = (props) => {
	const { path } = props;

	const navigationLinks = [
		{
			href: "/resume",
			name: "Resume",
		},
		{
			href: "/works",
			name: "Works",
		},
	];

	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg={useColorModeValue("rgba(61, 122, 237, 0.8)", "rgba(61, 122, 237, 0.8)")}
			css={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
			{...props}>
			<Container
				display="flex"
				p={2}
				maxW="container.lg"
				wrap="wrap"
				align="center"
				justify="space-between">
				<Flex align="center" mr={5}>
					<Heading as="h1" size="lg" letterSpacing={"tighter"}>
						<Logo />
					</Heading>
				</Flex>

				<Stack
					direction={{ base: "column", md: "row" }}
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems="center"
					flexGrow={1}
					mt={{ base: 4, md: 0 }}>
					{navigationLinks.map((link) => (
						<LinkItem href={link.href} path={path} key={link.name}>
							{link.name}
						</LinkItem>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default Navbar;
