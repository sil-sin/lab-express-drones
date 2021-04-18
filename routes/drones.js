const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here
const Drones = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drones.find()
    .then((drones) => {

      res.render('drones/list.hbs', { drones })
    }).catch((err) => {
      console.log(err)
    });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed } = req.body
  Drones.create({ name, propellers, maxSpeed })
    .then((newDrone) => {
      console.log({ newDrone })
      res.redirect("/drones")
    }).catch((err) => {
      console.log(err)
    });
});

router.get('/drones/:id', (req, res, next) => {
  const { id } = req.params
  Drones.findById(id)
    .then((drone) => {
      res.render('drones/drone-details.hbs', { drone })
    })
    .catch((err) => { console.log(err) })

})
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params



  Drones.findById(id)
    .then((drone) => {
      res.render('drones/update-form.hbs', { drone })
    })
    .catch((err) => { console.log(err) })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  const { name, propellers, maxSpeed } = req.body
  Drones.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then((drone) => {
      res.redirect('/drones')
    })
    .catch((err) => { console.log(err) })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
  Drones.findByIdAndDelete(id)
    .then((result) => {
      console.log('Drone Deleted')
      res.redirect('/drones')
    }).catch((err) => {

    });
});

module.exports = router;
