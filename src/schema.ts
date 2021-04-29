import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
type Coordinate {
  latitude: Float!
  longitude:Float!
}
type Coordinates {
  coordinates: [Coordinate]
}
type Query {
  """Returns a GeoJson Polygon representing the legal gameArea"""
  gameArea : Coordinates 
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };