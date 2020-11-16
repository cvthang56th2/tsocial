const Boom = require('boom')
const mongoose = require('mongoose')
const jsonwebtoken = require('jsonwebtoken')

const User = mongoose.model('User')

const utils = require('../../utils')

const getItems = async request => {
  console.log('request.payload', request.payload)
  return {}
}

const register = async request => {
  try {
    const { email, password } = request.payload

    const existingUser = await User.findOne({
      email
    })

    if (existingUser) {
      return Boom.badRequest('We already have a user with that email')
    }

    const user = new User({ email, password })

    await user.save()

    const sendMailResult = await utils.sendVerificationEmail(user)

    return Object.assign(sendMailResult, { message: "Registration complete! Please check your email to verify your account" })
  } catch (err) {
    Boom.badImplementation(err)
  }
}

const confirmation = async request => {
  const token = request.query.token

  const email = jsonwebtoken.verify(token, process.env.SECRET_KEY)

  const user = await User.findOne({ email }).select('email').lean()

  if (!user || !token) {
    Boom.badRequest('Invalid token')
  }

  await User.findByIdAndUpdate(user._id, { active: true })

  return { success: true, message: 'Account successfully activated!' }
}

const login = async request => {
  try {
    const {email, password} = request.payload
    const user = await User.findOne({ email })

    if (!user) {
      return Boom.badRequest('No account with that email')
    }

    if(!user.active){
      return Boom.badRequest('Your account isn\'t activated yet. Check your email!')
    }

    // const passwordMatch = await utils.comparePassword(password, user.password)
    const passwordMatch = password === user.password

    if (!passwordMatch) {
      return Boom.badRequest('Password does not match')
    }

    const token = jsonwebtoken.sign(user.email, process.env.SECRET_KEY)

    delete user.password

    return {
      token,
      user
    }

  } catch (err) {
    Boom.badImplementation(err)
  }
}

module.exports = {
  getItems,
  register,
  confirmation,
  login
}