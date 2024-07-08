/**
 * gql -It's a tagged template literal, used for wrapping GraphQL strings
 * like the schema definition we're about to write. This converts GraphQL
 * strings into the format that Apollo libraries expect when working with
 * operations and schemas, and it also enables syntax highlighting.
 */
import gql from 'graphql-tag';

export const typeDefs = gql`
	"""
	The fields of this type are entry points into the rest of our schema.
	These are the top-level fields that our client can query for.
	"""
	type Query {
		"Query to get tracks array for the homepage grid"
		tracksForHome: [Track!]!
	}
	"A track is a group of modules that teaches about a specific topic"
	type Track {
		id: ID!
		"the track's title"
		title: String!
		"the track's main author"
		author: Author!
		"the track's main illustration to display in track or track page detail"
		thumbnail: String
		"the track's approximate length to complete, in minutes"
		length: Int
		"the number of modules this track contains"
		modulesCount: Int
	}
	"Author of a complete track"
	type Author {
		id: ID!
		"Author's first and last name"
		name: String!
		"Author's profile picture url"
		photo: String
	}
`;
