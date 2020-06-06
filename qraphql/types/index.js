module.exports = `
type User{
  id: ID!
  name: String!
  email: String!
  todos: [Todo]
}

type Todo{
  id: ID!
  name: String!
}

type Token{
  name: String!
}

type Query{
  user(id: ID!): User
  users: [User]
}

type Mutation{
  signUp(name: String!, email: String!, password: String!, password2: String!): User
}
`