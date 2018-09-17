const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const regionSchema = new Schema({
    RegionID: {type: String, unique: true, required: true},
    RegionType: {type: String, lowercase: true},
    SubClass: {type: String, lowercase: true},
    RegionName: {type: String, lowercase: true},
    RegionNameLong: {type: String, lowercase: true},
    Resorts: [String]
})

module.exports = mongoose.model('Area', regionSchema)
