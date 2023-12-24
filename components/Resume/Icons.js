import { Icon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { MdLocalHospital } from "react-icons/md";
import { GrTestDesktop } from "react-icons/gr";
import {
	SiWindows,
	SiApple,
	SiAndroid,
	SiApachekafka,
	SiApachemaven,
	SiAzuredevops,
	SiCplusplus,
	SiCsharp ,
	SiCss3,
	SiDjango,
	SiDocker,
	SiFirebase,
	SiFlutter,
	SiGithub,
	SiGooglecloud,
	SiHeroku,
	SiHtml5,
	SiIpfs,
	SiJavascript,
	SiJira,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPhpmyadmin,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiRedux,
	SiSolidity,
	SiSpringboot,
	SiStorybook,
	SiTypescript,
	SiVercel,
	SiVuedotjs, 
} from "react-icons/si";
import { FaJava, FaComputer } from "react-icons/fa";


export const ResumeLogo = ({ children, title, thumbnail, small = false }) => (
	<Box
		textAlign="center"
		display="flex"
		alignItems="center"
		flexDirection="column"
		px={2}
		mb={5}
		role="group">
		<Icon
			as={thumbnail}
			alt={title}
			w={small ? "36px" : "48px"}
			h={small ? "36px" : "48px"}
			placeholder="blur"
		/>
		<Text
			fontSize="sm"
			fontWeight="bold"
			position="absolute"
			mt={small ? "36px" : "48px"}
			_groupHover={{ opacity: 1, transition: "opacity .2s ease-in" }}
			className="opacity-0 ease-out transition-all duration-1000">
			{children}
		</Text>
	</Box>
);

export default function TechStack({ stack }) {
	return (
		<Box>
			<Box className="flex flex-row flex-wrap">
				{Object.entries(stack).map(([key, value]) => (
					<ResumeLogo key={key} title={key} thumbnail={value} small={true}>
						{key}
					</ResumeLogo>
				))}
			</Box>
		</Box>
	);
}

export const AutoCoachTech = () => {
	const  tmCoach = {
		"C++": SiCplusplus,
		"C#": SiCsharp,
		Jira: SiJira,
		Github: SiGithub,
	};
	return <TechStack stack={tmCoach} />;
};
export const SwinnyTech = () => {
	const tmSwin = {
		Windows: SiWindows,
		MacOS: SiApple,
	};
	return <TechStack stack={tmSwin} />;
};

export const GreatEastTest = () => {
	const tmTest = {
		STLC: GrTestDesktop,
	};
	return <TechStack stack={tmTest} />;
};

export const TechJK = () => {
	const jkList = {
		Windows: SiWindows,
		MacOS: SiApple,
	};
	return <TechStack stack={jkList} />;
};

export const HealthCare = () => {
	const tmHealthList = {
		Healthcare: MdLocalHospital,
	};

	return <TechStack stack={tmHealthList} />;
};

export const Databases = () => {
	const databaseList = {
		Docker: SiDocker,
		PgSQL: SiPostgresql,
		MySQL: SiMysql,
		Firebase: SiFirebase,
		Heroku: SiHeroku,
		IPFS: SiIpfs,
		mongodb: SiMongodb,
		Kafka: SiApachekafka,
	};

	return <TechStack stack={databaseList} />;
};

export const ToolsAndFramework = () => {
	const frameworkList = {
		Android: SiAndroid,
		Django: SiDjango,
		React: SiReact,
		Next: SiNextdotjs,
		Redux: SiRedux,
		Vercel: SiVercel,
		Vue: SiVuedotjs,
		Flutter: SiFlutter,
		Git: SiGithub,
		Google: SiGooglecloud,
	};

	return <TechStack stack={frameworkList} />;
};

export const ProficientLanguage = () => {
	const languageList = {
		Java: FaJava,
		JS: SiJavascript,
		TS: SiTypescript,
		"C++": SiCplusplus,
		CSS: SiCss3,
		HTML: SiHtml5,
		Python: SiPython,
		Solidity: SiSolidity,
	};

	return <TechStack stack={languageList} />;
};
