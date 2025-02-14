import { Box, Heading, Link } from "@chakra-ui/react";
import React from "react";
import {
	AutoCoachTech,
	SwinnyTech,
	GreatEastTest,
	TechJK,
	HealthCare,
	FacilitiesTech  // new icon for facilities management
} from "./Icons";
import ResumeDetail from "./ResumeDetail";

const WorkDetails = [
  {
    title: "Focused Facilities Management Pty Ltd",
    location: "Aurora, Melbourne",
    roles: [
      {
        subtitle: "Building Concierge - Part Time",
        date: "June 2024 - 28 Feb 2025",
        description: [
          "Manage front-desk operations and provide excellent customer service to tenants and visitors",
          "Coordinate maintenance and liaise with contractors to promptly resolve building issues",
          "Ensure security protocols are followed and assist with access control",
          "Foster positive communication between tenants and management"
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
        subtitle: "Developer/Designer",
        date: "Nov. 2023 – Oct. 2024",
        description: [
          "Developed diabetes management hardware and software, including user testing and prototyping",
          "Designed a 3D model integrating blood glucose monitoring and alarms, synced with a mobile app",
          "Collaborated with industry partners such as AWS, Reece Group, and LaunchVic to refine business strategies and tech solutions"
        ]
      }
    ],
    tech: <HealthCare />
  },
  {
    title: "Autocoach Pty Ltd",
    location: "On-site, Melbourne",
    roles: [
      {
        subtitle: "Region Technical Specialist - Internship",
        date: "May 2023 – Sept. 2023",
        description: [
          "Addressed technical issues for customers in South East Asia",
          "Provided detailed reports to the development team and offered technical support for Autocoach Sports software",
          "Participated in system integration and testing",
          "Collaborated with the team to identify and resolve bugs",
          "Worked with Ang Peng Siong, Singapore’s Swimming National Head Coach, on device updates and patches"
        ]
      }
    ],
    tech: <AutoCoachTech />
  },
  {
    title: "Swinburne University of Technology",
    location: "On-site, Melbourne",
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
    title: "MinMed Clinic",
    location: "Singapore",
    roles: [
      {
        subtitle: "Healthcare Assistant",
        date: "June 2021 - May 2022",
        description: [
          "Assisted in swabbing patients for Covid-19 during travel restrictions in Singapore",
          "Performed swab tests and activated isolation and evacuation procedures as needed",
          "Contributed to the healthcare team during a critical period of the pandemic"
        ]
      }
    ],
    tech: <HealthCare />
  },
  {
    title: "JK Technology",
    location: "Singapore",
    roles: [
      {
        subtitle: "Technical Specialist",
        date: "Nov. 2020 – June 2021",
        description: [
          "Serviced approximately 20,000 computers",
          "Managed desktop tech refresh and data migration",
          "Imaged desktops and laptops, and performed hardware and software troubleshooting",
          "Applied OS and application patches and updates",
          "Supported banking clients like OCBC Bank and Great Eastern in Fintech solutions"
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
          "Documented testing artifacts and prepared test data",
          "Monitored testing progress, logged defects, and ensured timely closure of the testing process",
          "Provided post-implementation support and assisted in creating training documentation",
          "Managed business and regulatory compliance risks by staying updated on industry trends"
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
