const User = require('../../models/user')
const Todo = require('../../models/todo')
//const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')
const jwtSecret = 'asd123'

module.exports = {
  User: {
    todos: (parent, args, context) => {
      return Todo.find({ userId: parent.id })
    }
  },
  Todo: {

  },
  Query: {
    user: (parent, args, context) => {
      return User.findById(args.id)
    },
    users: (parent, args, context) => {
      return User.find({})
    }
  },
  Mutation: {
    signUp: (parent, args, context) => {

    }
  }

}