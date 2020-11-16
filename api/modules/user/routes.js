const Controller = require('./controllers')

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: Controller.getItems
  },
  {
    method: 'POST',
    path: '/user/register',
    handler: Controller.register,
    options: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/user/confirmation',
    handler: Controller.confirmation,
    options: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/user/login',
    handler: Controller.login,
    options: {
      auth: false
    }
  },
]