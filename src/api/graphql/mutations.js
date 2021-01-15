const graphql = require('graphql')

const { upload } = require('../resolvers/image.resolve')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Image Mutations
        upload: {
            description: "Upload image to cloud storage",
            type: GraphQLString,            
            args: {
                filename: { type: GraphQLString },
            },
            resolve(parent, args) {
                return upload(args)
            }
        },
    }
})