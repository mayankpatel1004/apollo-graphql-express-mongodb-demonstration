const { gql} = require("apollo-server-express");
// Type Query is to read data from database i.e. View or fetching records
// Mutation is use to perform operation into database i.e. Insert/Update/Delete
const typeDefs = gql`

    type Post {
        id: ID
        title: String
        description: String
    }

    input PostInput {
        title: String,
        description: String
    }

    type Query {
        hello(name: String): String!
        getAllPosts:[Post]
        getPost(id: ID): Post
    }

    type Mutation {
        createPost(post: PostInput): Post
        deletePost(id:ID): String
        updatePost(id:ID, post: PostInput): Post
    }
`;
module.exports = typeDefs;