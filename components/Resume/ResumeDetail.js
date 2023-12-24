import {
	Box,
	Divider,
	Flex,
	ListItem,
	Spacer,
	Text,
	UnorderedList,
	Link,
	Button,
} from "@chakra-ui/react";
import React from "react";

export default function ResumeDetail({ detail }) {
	return (
		<div className="mb-2">
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				flexDir={{ sm: "column", smmd: "row" }}>
				<Text fontSize={18} fontWeight="bold">
					{detail.title}
				</Text>
				<Text fontSize={16} fontWeight="bold" color="blue">
					{detail.location}
				</Text>
			</Box>
			{detail.roles.map((role, index) => (
				<Box key={index}>
					<Flex
						alignItems="center"
						justifyContent="space-between"
						flexDir={{ sm: "column", smmd: "row" }}
						mb={{ sm: 4, smmd: 1 }}>
						<Text
							fontSize={14}
							fontWeight="medium"
							fontStyle="italic"
							textAlign={{ sm: "center", smmd: "left" }}>
							{role.subtitle}
						</Text>
						<Text fontSize={14} fontWeight="medium">
							{role.date}
						</Text>
					</Flex>
					<UnorderedList pl={8} fontSize={14} fontWeight="light" mb={2} marginTop={"4px"}>
						{role.description.map((description, index) => (
							<ListItem key={index}>{description}</ListItem>
						))}
					</UnorderedList>
					{/* Testimonial Button */}
					{role.testimonialLink && (
					<Flex justifyContent="center" mt={2}>
					<Link href={role.testimonialLink} isExternal>
						<Button mt={2} colorScheme="teal">
							View Testimonial
						</Button>
					</Link>
					</Flex>
					)}
				</Box>
			))}
			<Spacer pb={2} />
			{detail.tech}
			<Divider />
		</div>
	);
}
