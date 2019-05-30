import * as express from 'express'
import { Person } from '../models/Person'
import { Role } from '../models/Role'

var person = express.Router();

person.route('/people')
  .get((req, res) => {
    Person
      .where(req.query)
      .fetchAll()
      .then((people) => {
        res.json({ people });
      });
  });

person.route('/person')
  .post((req, res) => {
    new Person({
      email: req.body.email,
      name: req.body.name,
      company: req.body.company,
    })
      .save()
      .then((saved) => {
        res.json({ saved });
      });
  });

person.route('/roles')
  .get((req, res) => {
    Role
      .where(req.query)
      .fetchAll()
      .then((roles) => {
        res.json({ roles });
      });
  });

person.route('/role')
  .post((req, res) => {
    new Role({
      name: req.body.name,
    })
      .save()
      .then((saved) => {
        res.json({ saved });
      });
  });

person.route('/role/assign')
  .post(async (req, res) => {
    const { personId, roleName } = req.body;
    Role
      .where('id', req.params.id)
      .fetch()
      .then((person) => {
        person
          .save({
            email: req.body.email,
            name: req.body.name,
            company: req.body.company,
          })
          .then((saved) => {
            res.json({ saved });
          });
      });
  });


module.exports = person;
