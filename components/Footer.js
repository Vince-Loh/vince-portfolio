import { Box } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box align="center" opacity={1} fontSize="sm" pt={8}>
			&copy; {new Date().getFullYear()} Vince Loh
		</Box>
	);
};

export default Footer;
