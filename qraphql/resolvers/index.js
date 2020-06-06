const User = require('../../models/user')
const Todo = require('../../models/todo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = 'asd123'

module.exports = {
  User: {
    todos: (parent, args, context) => {
      return Todo.find({ userId: parent.id })
    }
  },
  Query: {
    user: (parent, args, context) => {
      return User.findById(args.id)
    },
    users: (parent, args, context) => {
      return User.find({})
    },

  },
  Mutation: {
    signUp: (parent, args, context) => {
      if (args.password !== args.password2) {
        throw new Error('password inconsistent')
      }
      return User.findOne({ email: args.email })
        .then(user => {
          if (user) { throw new Error('email duplicate') }
          const u = new User({
            name: args.name,
            email: args.email,
            password: bcrypt.hashSync(args.password, 10),
          })
          return u.save()
        })
    },

    login: (parent, args, context) => {
      return User.findOne({ email: args.email })
        .then(user => {
          if (!user) throw new Error('email not found')
          const valid = bcrypt.compareSync(args.password, user.password)
          if (!valid) throw new Error('passeord incorrect')
          const createToken = jwt.sign({ email: user.email }, SECRET, { expiresIn: '1d' })
          return { token: createToken }
        })
    }
  }

}