const { ApolloServer } = require("apollo-server-express")
const express = require("express")
const typeDefs = require("./graphql/typesDefs")
const resolvers = require("./graphql/resolvers")

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}/`)
})

app.get("/", (req, res) => {
  //redirect to graphql route
  res.redirect("/graphql")
})
