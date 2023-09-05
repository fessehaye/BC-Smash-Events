const { GraphQLClient, gql } = require("graphql-request");

module.exports.handler = async (context) => {
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

  const data = await graphQLClient.request(query);

  // endpoints are executed as functions, click [> Run] below to test
  return data.tournaments.nodes;
};
