import * as express from 'express'
import { Device } from '../models/Device'
import { Person } from '../models/Person'

var device = express.Router();

device.route('/devices')
  .get((req, res) => {
    Device
      .where(req.query)
      .fetchAll()
      .then((devices) => {
        res.json({ devices });
      });
  });

device.route('/devices/registered')
.get()

device.route('/devices/:deviceId')
.get()

device.route('/devices/person/:personId')
.get()

device.route('/devices/register')
.post()

device.route('/devices/person')
.post()

device.route('/device/:deviceId')
.put()

