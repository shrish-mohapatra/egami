const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = graphql;

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // Image Queries
        images: {
            description: "Retrieve images based on query parameters",
            type: GraphQLString,
            // args: {id: { type: GraphQLID },},
            resolve(parent, args) {
                return "images";
            }
        },
    }
})