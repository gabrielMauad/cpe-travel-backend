const express = require('express')
const routes = express.Router();
const multer = require('multer')
const multerConfig = require('./config/multer')
const LocalsController = require('./controllers/LocalsController');
const SublocalsController = require('./controllers/SublocalsController');
const UserController = require('./controllers/UserController')

routes.get('/locals', LocalsController.index)
routes.post('/locals', LocalsController.create)
routes.put('/locals', LocalsController.update) 
routes.delete('/locals/:local_id', LocalsController.delete)

routes.get('/sublocals', SublocalsController.index)
routes.post('/sublocals', SublocalsController.create)
routes.put('/sublocals', SublocalsController.update) 
routes.delete('/sublocals/:sublocal_id', SublocalsController.delete)

routes.get('/user', UserController.index)
routes.post('/user', UserController.create)
routes.put('/user', UserController.update) 
routes.delete('/user/:user_id', UserController.delete)

routes.post("/posts", multer(multerConfig).single("file"),(req, res) => {
    console.log(req.file);
    return res.json(req.file);
  });

module.exports = routes;  
