import { PageProps, HeadFC, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="About page">
			<p>I'm a gatsby noob. Learning gatsby through their docs.</p>
			<Link to="/">Back to home</Link>
		</Layout>
	)
};

export const Head:HeadFC = () => (<>
	<title>About page</title>
	<meta name="description" content="width=view-width;" />
</>)

export default AboutPage;
