// Iteration #1
require("../db")


const mongoose = require("mongoose")

const Drone = require("../models/Drone.model")

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
];
// create the drone seeds
Drone.create(drones)
    .then(() => {
        console.log("Drone Files Added Successfully ! ♥ ")
        // close connection 
        return mongoose.connection.close()
    })
    .then(() => {
        console.log("Connection Terminated ! ♠")
    })
    .catch(() => {
        console.log("Oh NO!!!")
    })

