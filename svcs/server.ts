import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Model } from 'bookshelf'
import * as Knex from 'knex'
import * as KnexConfig from '../knexfile'

const knex = Knex(KnexConfig);

Model.knex(knex);

const app = express();
app.use(bodyParser.json());

export default app;
