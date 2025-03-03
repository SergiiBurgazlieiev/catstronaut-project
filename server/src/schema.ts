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
		"Query to get track details"
		track(id: ID!): Track
	}

	type Mutation {
		incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
	}

	type IncrementTrackViewsResponse {
		"Similar to HTTP status code, represents the status of the mutation"
		code: Int!
		"Indicates whether the mutation was successful"
		success: Boolean!
		"Human-readable message for the UI"
		message: String!
		"Newly updated track after a successful mutation"
		track: Track
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
		"The Track's complete description, can be in Markdown format"
		description: String
		"The number of time a track has been viewed"
		numberOfViews: Int
		"The track's complete array of Modules"
		modules: [Module!]!
	}

	"A Module is a single unit of teaching. Multiple modules compose a Track"
	type Module {
		id: ID!
		"Module's title"
		title: String!
		"Module's length in minutes"
		length: Int
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
