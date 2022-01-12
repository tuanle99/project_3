const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gardenista");

const entrySeed = [
    {
        title: "tests",
        body: "asfdfsd",
        journal: "succulent"

    },

    {
        title: "tests",
        body: "asfdfsd",
        journal: "bonsai"

    },
    
    {
        title: "tests",
        body: "asfdfsd",
        journal: "lavender"

    },
];

db.Entries.remove({})
    .then(() => db.Entries.collection.insertMany(entrySeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
