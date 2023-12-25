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

import { HamburgerIcon } from "@chakra-ui/icons";



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
			href: "/projects",
			name: "Projects",
		},
		{
			href: "/blogs",
			name: "Blogs",
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

				<Box flex={1} align="right">
					<Box ml={2} display={{ base: "inline-block", md: "none" }}>
						<Menu isLazy id="navbar-menu">
							<MenuButton
								as={IconButton}
								icon={<HamburgerIcon />}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList style={{ backgroundColor: '#3D7AED' }} >
								{navigationLinks.map((link) => (
									<NextLink href={link.href} path={path} key={link.name}>
										<MenuItem  as={Link} className="hamburgerOption" style={{ color: '#ffffff' }} > {link.name}</MenuItem>
									</NextLink>
								))}
							</MenuList>

						</Menu>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
