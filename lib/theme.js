import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
	sm: "320px",
	smmd: "500px",
	md: "768px",
	lg: "960px",
	xl: "1200px",
});

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#FFF")(props),
		},
		html: {
			scrollBehavior: "smooth",
		},
	}),
};

const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: "#3d7aed",
				textDecorationThickness: 4,
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props) => ({
			color: mode("#3d7aed", "#3d7aed")(props),
			textUnderlineOffset: 3,
		}),
	},
};

const fonts = {
	heading: "'Fira Code', 'Light'",
};

const colors = {
	lightPink: "#EDC7B7",
	lightGray: "#EEE2DC",
	darkGray: "#BAB2B5",
	darkBlue: "#123C69",
	hotPink: "#AC3B61",
	blue: "#3D7AED",
	white: "#FFFFFF",
	black: "#000000",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	styles,
	components,
	fonts,
	colors,
	breakpoints,
});
export default theme;
