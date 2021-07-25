//import { ApolloClient } from "apollo-boost";
import ApolloClient from "apollo-boost";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://192.168.20.69:5000/graphql",
  });
};

export default createApolloClient;
