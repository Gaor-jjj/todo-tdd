const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://kaur:salauss@cluster0.5i3um.mongodb.net/"
        )
    } catch (err) {
        console.error('Error connecting to mongodb')
        console.error(err)
    }
}

module.exports = { connect }