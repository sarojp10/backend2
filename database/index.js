// const mongoose = require('mongoose')

// async function connectTodatabase() {
//     await mongoose.connect(process.env.MONGODB_URL)
//     console.log("Database connected successfully")
// }
// module.exports = connectTodatabase 

const mongoose = require('mongoose')

async function connectDatabase(){
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected successfully")
}

module.exports = connectDatabase
