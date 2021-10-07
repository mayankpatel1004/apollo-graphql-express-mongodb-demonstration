const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const PORT = 3000;

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    
    apolloServer.applyMiddleware({app:app}); //http://localhost:4000/graphql
    //apolloServer.applyMiddleware({app:app,path:'/mayank'}); //http://localhost:4000/mayank

    await mongoose.connect("mongodb://localhost:27017/apollo-graphql-express",{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("Mongoose Connected.............");

    app.use((req, res) => {
        res.send("Hello from express apollo server !!!");
    })

    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
}

startServer();