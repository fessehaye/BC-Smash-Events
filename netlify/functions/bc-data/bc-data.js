const { GraphQLClient, gql } = require("graphql-request");

module.exports.handler = async () => {
  const endpoint = "https://api.smash.gg/gql/alpha";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.APIKEY}`,
    },
  });

  const query = gql`
    {
      tournaments(
        query: {
          filter: {
            countryCode: "CA"
            addrState: "BC"
            upcoming: true
            videogameIds: ["1", "1386", "2"]
          }
        }
      ) {
        pageInfo {
          total
        }
        nodes {
          name
          startAt
          url(relative: false)
          city
          images {
            url
            type
          }
          events {
            videogame {
              id
            }
          }
        }
      }
    }
  `;

  try {
    console.log("Sending GraphQL request...");
    const data = await graphQLClient.request(query);
    console.log("GraphQL request successful:", data);
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow any origin
        "Access-Control-Allow-Headers": "Content-Type", // Allow specific headers
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS" // Allow specific methods
      },
      body: JSON.stringify(data.tournaments.nodes),
    };
  } catch (error) {
    console.error("GraphQL request failed:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*", // Allow any origin
        "Access-Control-Allow-Headers": "Content-Type", // Allow specific headers
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS" // Allow specific methods
      },
      error
    }
  }
  

  // endpoints are executed as functions, click [> Run] below to test
  
};
