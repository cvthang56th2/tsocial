const Controller = require('./controllers')

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: Controller.getItems
  }
]