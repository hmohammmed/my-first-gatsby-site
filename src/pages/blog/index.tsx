import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";

export default function Blogs(props: PageProps<Queries.SlugQuery>) {
	const { data } = props;
	console.log(data);
	return (
		<Layout pageTitle="Blogs">
			<h1>Table of contents</h1>
			{data.allMdx.nodes.map(val => (
				<div>
					<Link key={val.frontmatter?.slug} to={`${val.frontmatter?.slug}`}>
						{val.frontmatter?.slug}
					</Link>
				</div>
			))}
		</Layout>
	);
};

export const query = graphql`
query Slug{
  allMdx{
    nodes{
      frontmatter{
        slug
      }
    }
  }
}
`

