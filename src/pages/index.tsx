import * as React from "react"
import { HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout pageTitle="Home page">
				<h1>Hi, Welcome to my gatsby site!</h1>
				<p>I'm making this by following the gatsby tutorial.</p>
				<Link to="/about" color="green">About</Link>
		</Layout>
	)
}

export const Head: HeadFC = () => <title>Home Page</title>
export default IndexPage

