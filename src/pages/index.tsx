import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="Home page">
			<h1>Hi, Welcome to my gatsby site!</h1>
			<StaticImage src="../images/dog.webp" alt="Clifford, a red bulldog, stoically looking at the camera!" />
			<p>I'm making this by following the gatsby tutorial.</p>
			<Link to="/about" color="green">About</Link>
		</Layout>
	)
}

export const Head: HeadFC = () => <title>Home Page</title>
export default IndexPage

