import * as React from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

const IndexPage = ({ data }: PageProps<Queries.TypegenPageQuery>) => {
return (
		<Layout pageTitle="Home page">
			<h1>Hi, My name is {data?.site?.siteMetadata?.title}</h1>
			<StaticImage src="../images/dog.webp" alt="Clifford, a red bulldog, stoically looking at the camera!" />
			<p>{data?.site?.siteMetadata?.description}</p>
			<Link to="/about" color="green">About</Link>
		</Layout>
	)
}

export const Head: HeadFC = () => <SEO />
export default IndexPage

export const query = graphql`
query IndexPage{
	site{
siteMetadata{
	title
	description
}
}
}
`
