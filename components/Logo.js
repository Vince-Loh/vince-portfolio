import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
	font-weight: bold;
	font-size: 22px;
	display: inline-flex;
	align-items: center;
	height: 30px;
	line-height: 20px;
	padding: 10px;

	img {
		transition: 200ms ease;
	}

	&:hover img {
		transform: rotate(20deg);
	}
`;

const Logo = () => {
	const codeImg = `/images/Brackets${useColorModeValue("", "")}.png`;

	return (
		<Link href="/">
			<a>
				<LogoBox>
					<Image src={codeImg} width={20} height={20} alt="logo" />
					<Text
						color={useColorModeValue("gray.800", "black.900")}
						fontFamily='Fira Sans", sans-serif'
						fontWeight="bold"
						ml={3}>
						Vince
					</Text>
				</LogoBox>
			</a>
		</Link>
	);
};

export default Logo;
