import * as express from 'express';
import { Device } from '../models/Device';
import { Person } from '../models/Person';

var device = express.Router();

device.route('/devices')
  .get((req, res) => {
    Device
      .where(req.query)
      .fetchAll()
      .then((devices) => {
        res.json(devices);
      });
  });

device.route('/devices/registered')
  .get((req, res) => {
    Device
      .where('registered', true)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

device.route('/devices/:deviceId')
  .get((req, res) => {
    Device
      .where('deviceId', req.params.deviceId)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

device.route('/devices/person/:personId')
  .get((req, res) => {
    Device
      .where('owned_by', req.params.personId)
      .fetch()
      .then((device) => {
        res.json(device);
      });
  });

device.route('/devices/register')
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

device.route('/devices/person')
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

device.route('/device/:deviceId')
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

