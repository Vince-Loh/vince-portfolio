import {
    Box,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center,
  } from "@chakra-ui/react";
  import { ExternalLinkIcon } from "@chakra-ui/icons";
  import { Title, WorkImage, Meta } from "../../components/Work";
  import P from "../../components/Paragraph";
  import Layout from "../../components/layouts/Articles";
  
  const Work = () => (
    <Layout title="Portfolio Website">
      <Box>
        <Title>
          Portfolio Website <Badge bg="blue">2023</Badge>
        </Title>
        <P style={{ fontSize: '14px' }}>
          A dynamic portfolio built with React.js, showcasing projects, resume, and experiences. Features include responsive design, smooth scrolling, and a blog.
          Hosted on AWS (S3, CloudFront), with a CI/CD pipeline using CodePipeline and CodeBuild, ensuring automated deployment from GitHub.
          Check it out at&nbsp;
          <Link href="https://vinceloh.au" isExternal color="teal.500">
            vinceloh.au <ExternalLinkIcon mx="2px" />
          </Link>.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, AWS, CI/CD</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Responsive Design, Smooth Scrolling, Blog Integration</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={8}>
          <Center>Project Showcase</Center>
        </Heading>
  
        <div className="space-y-8">
          <WorkImage src="/images/works/portfolio_home.png" alt="Portfolio Home" />
          <WorkImage src="/images/works/portfolio_resume.png" alt="Portfolio Home" />
          <WorkImage src="/images/works/portfolio_projects.png" alt="Projects Page" />
          <WorkImage src="/images/works/portfolio_blog.png" alt="Blog Page" />
        </div>
      </Box>
    </Layout>
  );
  
  export default Work;
  