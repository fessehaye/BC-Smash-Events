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
    const data = await graphQLClient.request(query);
    return {
      statusCode: 200,
      body: JSON.stringify(data.tournaments.nodes),
    };
  } catch (error) {
    return {
      statusCode: 500,
      error
    }
  }
  

  // endpoints are executed as functions, click [> Run] below to test
  
};
