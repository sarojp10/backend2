const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSchema = new Schema({
    personName : {
        type : String
        // unique : true
    },
    personProfession : {
        type : String
    },
    personAge : {
        type : String
    },
    personHobbies : {
        type : String
    },
    personGender : {
        type : String
    },
    personStatus : {
        type : String
    },
    personLink : {
        type : String
    },
    personMoto : {
        type : String
    },
    personImage : {
        type : String
    }
})

const Person = mongoose.model('Person',personSchema)
module.exports = Person