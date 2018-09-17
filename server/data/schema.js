const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

const typeDefs = `
	type User {
		email: String
		fullname: String
		github: GitHub
	}
	type GitHub {
		id: Int
		name: String
		email: String
	}
	
	type Regions {
		RegionID: String
		RegionType: String
		RegionName: String
		RegionNameLong: String
		_id: String
	}

	type Query {
		profile: User
		profiles: [User]
		SearchLocations(query: String!, limit: Int!): [Regions]
	}
	
	type Mutation {
		createUser(email: String!, fullname: String, password: String!): User
		login(email: String!, password: String!): User
		authGithub: User
	}
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });
