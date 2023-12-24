import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";
import {
	AutoCoachTech,
	SwinnyTech,
	GreatEastTest,
	TechJK,
	HealthCare,
} from "./Icons";
import ResumeDetail from "./ResumeDetail";

const WorkDetails = [
	{
		title: "Autocoach Pty Ltd",
		location: "On-site, Melbourne",
		roles: [
			{
				subtitle: "Region Technical Assistant",
				date: "Feb 2023 - May 2023",
				description: [
					"Troubleshoot and resolve software issues reported by clients",
					"Provide technical assistance and support to customers using the Autocoach Sports software applications",
					"Participated in the integration and testing of systems",
					"Collaborate with the development team to identify bugs and suggest possible improvements",
					"Investigate complex technical issues raised by customers and provide detailed reports to the development team",
				],
			},
		],
		tech: <AutoCoachTech/>,
	},
	{
		title: "Swinburne University of Technology",
		location: "On-site, Melbourne",
		roles: [
			{
				subtitle: "Vintage Computer Technician",
				date: "Feb 2023 - May 2023",
				description: [
					"Bringing vintage computers back to life through disassembling, examining, repairing, replacing parts, and cleaning.",
					"Utilizing internet research from hobbyist sites to inform professional vintage computer restoration strategies.",
					"Learning how to use and update a database for these vintage computers.",
					"Creating clean, functional computer systems from the lab's collection of untested computers and spare parts.",
				],
			},
		],
		tech: <SwinnyTech/>,
	},
	{
		title: "Great Eastern Life",
		location: "Singapore",
		roles: [
			{
				subtitle: "User Acceptance Testing Analyst",
				date: "Aug 2020 - Nov 2020",
				description: [
					"Performed user acceptance testing for product launches and product enhancements in	accordance to business and operational requirements",
					"Document and file testing artefacts and documents into retrievable repositories.",
					"Prepare test data, monitor testing progress and to log defects.",
					"Ensure proper closure of the entire testing process within stipulated timelines.",	
					"Maintains awareness of industry trends on regulatory compliance, emerging threats and technologies in order to understand the risk and better safeguard the company.",
					"Takes accountability in considering business and regulatory compliance risks and takes appropriate steps to mitigate the risks.",
				],
			},
		],
		tech: <GreatEastTest/>,
	},
	{
		title: "JK Technology",
		location: "Singapore",
		roles: [
			{
				subtitle:
					"Technical Specialist",
				date: "June 2020 - September 2020",
				description: [
					"Desktop Tech Refresh and data migration",
					"Imaging of desktops and laptops",
					"Hardware and software troubleshooting",
					"OS and application patches and updates",
					"Hardware and software installation",
				],
				testimonialLink: "/images/testimonial.pdf",
			},
		],
		tech: <TechJK />,
	},
	{
		title: "MinMed Clinic",
		location: "Singapore",
		roles: [
			{
				subtitle: "Covid-19 Swabber",
				date: "Dec 2020 - May 2022",
				description: [
					"During my year in Singapore, after serving the National Service, I was stuck in Singapore due to flight restrictions and i wanted to also do a part for the Covid Patients and hence i decided to work with MinMed Clinic to assist in the swabbing of patients for Covid-19.",
					"Performing swab tests for patients",
					"Activate isolation and evacuation procedures",
				],
			},
		],
		tech: <HealthCare />,
	},
];

export default function WorkExperience() {
	return (
		<Box mb={4}>
			
			<Heading as="h3" variant="section-title" fontSize={24}>
				Experience
			</Heading>
			{WorkDetails.map((detail, index) => (
				<ResumeDetail key={index} detail={detail}/>
			))}
		</Box>
	);
}
