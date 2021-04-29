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

type Status {
  status: String
  msg: String
}


type Query {

  """Returns a GeoJson Polygon representing the legal gameArea"""
  gameArea : Coordinates 

  """Check whether caller, given his latitude and lontitude, is inside the gameArea"""
  isUserInArea(latitude:Float!,longitude:Float!):Status!
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
