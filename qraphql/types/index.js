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
  done: Boolean!
}

type Token{
  token: String!
}

type Query{
  user: User
  users: [User]
}

type Mutation{
  signUp(name: String!, email: String!, password: String!, password2: String!): User
  login(email: String!, password: String!):Token
  addTodo(name: String!): Todo
  deleteTodo(id: String!):User
  todoDone(id: String!): Todo
}
`