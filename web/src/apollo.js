import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createUploadLink } from "apollo-upload-client"
import config from "./config"

const link = createUploadLink({ uri: `${config.API_URL}/graphql` })

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
