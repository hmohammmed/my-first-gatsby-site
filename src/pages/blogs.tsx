import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Blogs(props: PageProps<Queries.BlogQuery>) {
	const { data } = props;
	return (
		<Layout pageTitle="Blogs">
			<h1>Blog page</h1>
			<ol>
				{data.allFile.nodes.map(val => (
					<li key={val.name}>{val.name}</li>
				))}
			</ol>
		</Layout>
	);
};

export const query = graphql`
query Blog{
	allFile{
		nodes{
			name
		}
	}
}
`
