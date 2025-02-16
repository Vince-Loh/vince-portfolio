import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { TechFintech } from "./Icons";
import ResumeDetail from "./ResumeDetail";
import Link from "next/link";
import { DocumentDownloadIcon } from "@heroicons/react/solid";

const EducationDetails = [
	{
		title: "Swinburne University Of Technology",
		location: "Melbourne, Australia",
		roles: [
			{
				subtitle: "Bachelor of Computer Science",
				date: "Feb 2022 - Jun 2024",
				description: [
					"Relevant course work: Object-Oriented Programming, Interface Design and Development, Data structures and algorithms, Database Analysis and Design, Networks and Switching, Developing Technical Software, Software Development for Mobile Development, Computer Systems",
					"GPA: 3.4/4.0",
				],
			},
		],
		tech: "",
	},
	{
		title: "Swinburne University Of Technology",
		location: "Melbourne, Australia",
		roles: [
			{
				subtitle: "Diploma of Information Technology",
				date: "Oct 2021 - Feb 2022",
				description: [],
			},
		],
		tech: "",
	},
	{
		title: "AIE - Academy of Interactive Media",
		location: "Melbourne, Australia",
		roles: [
			{
				subtitle: "Cert III in Screen & Media",
				date: "January 2017 - October 2018",
				description: ["Game Design and Development"],
			},
		],
		tech: "",
	},
];
export default function Education() {
	return (
		<Box mb={8}>
			<div className="container flex flex-1 flex-col">
				<div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
					<p className="my-1">
						If you are a recruiter, I am best contacted via email at{" "}
						<Link href="#vince.lohys@gmail.com" passHref>
							<span className="underline">vince.lohys@gmail.com</span>
						</Link>
					</p>
					<div className="mt-2" style={{ marginBottom: "20px" }}>
						<a
							href="/images/vince_resume.pdf"
							className="inline-flex items-center rounded-lg border border-gray-200 bg-[#3D7AED] py-2 px-4 text-sm font-medium text-white hover:bg-opacity-90 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:focus:ring-gray-700"
						>
							<DocumentDownloadIcon className="mr-2 h-4 w-4" />
							<span id="download" color="#222">
								Download Resume
							</span>
						</a>
					</div>
				</div>
			</div>
			<Heading as="h3" variant="section-title" fontSize={24}>
				Education
			</Heading>
			{EducationDetails.map((detail, index) => (
				<ResumeDetail key={index} detail={detail} />
			))}
		</Box>
	);
}
