const express = require('express');
const routes = express.Router();

const LocalsController = require('./controllers/LocalsController')

routes.get('/locals', LocalsController.index)
routes.post('/locals', LocalsController.create)
routes.put('/locals', LocalsController.update) 
routes.delete('/locals/:id', LocalsController.delete)

module.exports routes;
