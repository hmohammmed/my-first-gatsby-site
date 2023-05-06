import { graphql, PageProps } from "gatsby";
import React from "react";

const TypegenPage: React.FC<PageProps<Queries.TypegenPageQuery>> = ({ data }) => {
	return (<>
		<h1>{data!.site!.siteMetadata!.title}</h1>
		<h1>{data!.site!.siteMetadata!.description}</h1>
	</>);
};

export default TypegenPage;

export const query = graphql`
query TypegenPage{
site{
siteMetadata{
title
description
}
}

}
`
