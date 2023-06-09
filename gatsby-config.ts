import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Mohammed Arshad Hassan`,
		siteUrl: `https://www.yourdomain.tld`,
		description: 'I am learning graphql and gatsby'
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-mdx",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/blogs`,
			}
		},],
}

export default config
