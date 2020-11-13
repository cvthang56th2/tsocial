const Controller = require('./controllers')

module.exports = [
  {
    method: 'GET',
    path: '/articles',
    handler: Controller.getItems
  },
]