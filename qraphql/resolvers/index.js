const User = require('../../models/user')
const Todo = require('../../models/todo')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

//parent: 上一層
//args: 輸入的參數
//context: 無設定context時為req
module.exports = {
  User: {
    todos: (parent, args, context) => {
      return Todo.find({ userId: parent.id })
    }
  },
  Query: {
    user: (parent, args, context) => {
      if (!context.isAuth) {
        throw new Error("false auth")
      }
      return User.findById(context.userId)
    },
    users: (parent, args, context) => {
      if (!context.isAuth) {
        throw new Error("false auth")
      }
      return User.find({})
    }
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

    login: (parent, args, { res }) => {
      return User.findOne({ email: args.email })
        .then(user => {
          if (!user) throw new Error('email not found')
          const valid = bcrypt.compareSync(args.password, user.password)
          if (!valid) throw new Error('passeord incorrect')
          const createToken = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1d' })
          res.cookie("access-token", createToken)
          return { token: createToken }
        })
    },

    addTodo: (parent, args, context) => {
      if (!context.isAuth) {
        throw new Error("false auth")
      }
      const todo = new Todo({
        name: args.name,
        userId: context.userId
      })
      return todo.save()
    },

    deleteTodo: (parent, args, context) => {
      if (!context.isAuth) {
        throw new Error("false auth")
      }

      return Todo.deleteOne({ _id: args.id }).catch(err => {
        throw new Error(err)
      }).then(() => {
        return User.findOne({ _id: context.userId })
      })


    }
  },

}