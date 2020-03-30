const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no backend
 * POST: Criar uma informação no backend
 * PUT: Laterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */



 /**
  * Tipos de parâmentros
  * 
  * Query Params : Parâmetros nomeados enviados na rota após o simbolo de '?' (Filtros, Paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  */

/**
 * MongoDB
 * CouchDB
 * etc
 */

 /**
  * Driver: Select * from users
  * Query Builder: table('users').select('*').where();
  */

