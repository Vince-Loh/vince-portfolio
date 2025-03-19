import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import {
	AutoCoachTech,
	SwinnyTech,
	GreatEastTest,
	TechJK,
	HealthCare,
	FacilitiesTech  // Use this as a placeholder; swap if needed
} from "./Icons";
import ResumeDetail from "./ResumeDetail";

const WorkDetails = [
  {
    title: "AdiraTec Pty Ltd",
    location: "Melbourne, Australia",
    roles: [
      {
        subtitle: "Front End & Web Content Developer - Contract",
        date: "June 2024 – January 2025",
        description: [
          "Collaborated with the AdiraTec team to design and develop a responsive company website",
          "Implemented dynamic features like interactive service pages and contact forms",
          "Updated content to reflect core values and sustainability goals",
          "Optimized website performance with AWS hosting for scalability and a seamless client experience"
        ]
      }
    ],
    tech: <FacilitiesTech />
  },
  {
    title: "Troche - Medtech",
    location: "Remote",
    roles: [
      {
        subtitle: "MERN Stack Developer",
        date: "Nov. 2023 – Oct. 2024",
        description: [
          "Developed a full-stack diabetes management solution using the MERN stack",
          "Integrated MongoDB, Express.js, Node.js, and React to build a responsive user interface",
          "Collaborated with AWS and healthcare partners like Reece Group and LaunchVic to prototype, test, and deploy scalable tech solutions"
        ]
      }
    ],
    tech: <HealthCare />
  },
  {
    title: "Autocoach Pty Ltd",
    location: "Melbourne, Australia",
    roles: [
      {
        subtitle: "Region Technical Specialist - Internship",
        date: "May 2023 – Sept. 2023",
        description: [
          "Addressed technical issues for customers in South East Asia",
          "Provided detailed reports to the development team and offered technical support for Autocoach Sports software",
          "Participated in system integration and testing, collaborating with the team to identify and resolve bugs",
          "Worked with Ang Peng Siong, Singapore’s Swimming National Head Coach on device updates and patches"
        ]
      }
    ],
    tech: <AutoCoachTech />
  },
  {
    title: "Swinburne University of Technology",
    location: "Melbourne, Australia",
    roles: [
      {
        subtitle: "Vintage Computer Technician - Internship",
        date: "Feb 2023 – May 2023",
        description: [
          "Restored vintage computers by disassembling, examining, repairing, replacing parts, and cleaning",
          "Conducted research using hobbyist sites to inform restoration strategies",
          "Updated and maintained a database for tracking vintage computer systems",
          "Rebuilt functional systems from untested computers and spare parts"
        ]
      }
    ],
    tech: <SwinnyTech />
  },
  {
    title: "JK Technology",
    location: "Singapore",
    roles: [
      {
        subtitle: "Technical Specialist",
        date: "Nov. 2020 – June 2021",
        description: [
          "Serviced approximately 20,000 computers and managed desktop tech refresh and data migration",
          "Imaged desktops and laptops, performed hardware/software troubleshooting, and applied OS and application patches",
          "Supported banking clients like OCBC Bank and Great Eastern with Fintech solutions"
        ]
      }
    ],
    tech: <TechJK />
  },
  {
    title: "Great Eastern Life",
    location: "Singapore",
    roles: [
      {
        subtitle: "User Acceptance Testing Analyst",
        date: "March 2020 – November 2020",
        description: [
          "Performed user acceptance testing for product launches and enhancements",
          "Documented testing artifacts, prepared test data, monitored progress, and logged defects",
          "Ensured timely closure of testing processes and provided post-implementation support",
          "Assisted in creating training documentation and managed business/regulatory compliance risks"
        ]
      }
    ],
    tech: <GreatEastTest />
  }
];

export default function WorkExperience() {
	return (
		<Box mb={4}>
			<Heading as="h3" variant="section-title" fontSize={24}>
				Experience
			</Heading>
			{WorkDetails.map((detail, index) => (
				<ResumeDetail key={index} detail={detail} />
			))}
		</Box>
	);
}
