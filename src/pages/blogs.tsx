import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout";

export default function Blogs(props: PageProps<Queries.BlogsQuery>) {
	const { data } = props;
	return (
		<Layout pageTitle="Blogs">
			<h1>Blog page</h1>
			<ol>
				{data.allMdx.nodes.map(val => (
					<article key={val.id}>
						<h2>{val?.frontmatter?.title}</h2>
						<p>{val?.frontmatter?.date}</p>
						<p>{val.excerpt}</p>
					</article>
				))}
			</ol>
		</Layout>
	);
};

export const query = graphql`
query Blogs {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      excerpt
      frontmatter {
        title
				date(formatString: "MMMM DD, YY")
      }
    }
  }
}
`
