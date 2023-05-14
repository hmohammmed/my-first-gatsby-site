import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

export default function Blogs({ data, children }: PageProps<Queries.FrontmatterQueryQuery>) {
	return (
		<Layout pageTitle="Blogs">
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<h1>{data.mdx?.frontmatter?.title}</h1>
				<code>{data.mdx?.frontmatter?.date}</code>
				<h1>
					{children}
				</h1>
			</div>
		</Layout>
	);
};

export const Head = () => <SEO />;

export const query = graphql`
  query FrontmatterQuery($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

