var express = require('express');
var Person = require('../models/Person');
var Role = require('../models/Role');
var Device = require('../models/Device');
var router = express.Router();

router.route('/people')
  .get((req, res) => {
    Person
      .where(req.query)
      .fetchAll()
      .then((people) => {
        res.json({ people });
      });
  });

router.route('/person')
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

router.route('/roles')
  .get((req, res) => {
    Role
      .where(req.query)
      .fetchAll()
      .then((roles) => {
        res.json({ roles });
      });
  });

router.route('/role')
  .post((req, res) => {
    new Role({
      name: req.body.name,
    })
      .save()
      .then((saved) => {
        res.json({ saved });
      });
  });

router.route('/role/assign')
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

router.route('/devices')
  .get((req, res) => {
    Device
      .where(req.query)
      .fetchAll()
      .then((devices) => {
        res.json(devices);
      });
  });

router.route('/devices/registered')
  .get((req, res) => {
    Device
      .where('registered', true)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

router.route('/devices/:deviceId')
  .get((req, res) => {
    Device
      .where('deviceId', req.params.deviceId)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

router.route('/devices/person/:personId')
  .get((req, res) => {
    Device
      .where('owned_by', req.params.personId)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

router.route('/devices/register')
  .post((req, res) => {
    new Device({
      type: req.body.type,
      location: req.body.location,
      macaddr: req.body.macaddr,
      registered: req.body.registered,
      owned_by: req.body.personId,
    })
      .save()
      .then((saved) => {
        res.json({ saved });
      });
  });

router.route('/devices/person')
  .post((req, res) => {
    Device
      .where('deviceId', req.body.deviceId)
      .fetch()
      .then((device) => {
        device
          .save({
            type: req.body.type,
            location: req.body.location,
            macaddr: req.body.macaddr,
            registered: req.body.registered,
            owned_by: req.body.personId,
          })
          .then((saved) => {
            res.json({ saved });
          });
      });
  });

router.route('/device/:deviceId')
  .put((req, res) => {
    Device
      .where('deviceId', req.body.deviceId)
      .fetch()
      .then((device) => {
        device
          .save({
            type: req.body.type,
            location: req.body.location,
            macaddr: req.body.macaddr,
            registered: req.body.registered,
            owned_by: req.body.personId,
          })
          .then((saved) => {
            res.json({ saved });
          });
      });
  });


module.exports = router;
