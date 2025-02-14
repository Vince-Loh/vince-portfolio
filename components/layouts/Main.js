import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Vince from "../Intro";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Analytics } from "@vercel/analytics/react";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Vince Loh Homepage" />
                <meta name="author" content="Vince Loh" />
                <meta property="og:site_name" content="Vince Loh Homepage" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/favicon.png" />
                <link rel="icon" href="/favicon.ico" />
                <title>Vince Loh - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <Vince />

                {children}

                <Footer />
            </Container>

            <Analytics />
        </Box>
    );
};

export default Main;