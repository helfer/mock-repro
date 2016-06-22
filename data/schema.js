const typeDefinitions = `

interface Node {
  id: ID!
}

type Friend {
  name: String
}

type Notification {
  uga: String
}

type FAQ {
  uga: String
}

type Page {
  uga: String
}

type Config {
  uga: String
}

type Speaker {
  uga: String
}

type Map {
  uga: String
}

type User implements Node {
      id: ID!
      name: String
      friends: [Friend]
      notifications: [Notification]
      faqs: [FAQ]
      pages: [Page]
      config: Config
    }

    type Session {
      id: ID!
      title: String
      slug: [Int]
      day: Int
      startTime: Float
      endTime: Float
      location: Map
      description: String
      speakers: [Speaker]
      isAdded: Boolean
      friends: [Friend]
    }

    type RootQuery {
      node(id: ID!): Node
      viewer: User
      schedule: [Session]
    }

    # we need to tell the server which types represent the root query
    # and root mutation types. We call them RootQuery and RootMutation by convention.
    schema {
      query: RootQuery
    }
`;

export default [typeDefinitions];
