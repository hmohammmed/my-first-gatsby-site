import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { siteTitle } from './layout.module.css';

const SEO = () => {
	const data = useStaticQuery(graphql`
	query {
	site{
		siteMetadata {
			title
			}
		}
	siteBuildMetadata {
		buildTime
	}
	}
	`);
	return (
		<>
			<title>
				{data.site.siteMetadata.title}
			</title>
		</>
	);
}

export default SEO;
