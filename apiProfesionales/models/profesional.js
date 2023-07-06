const mongoose = require ("mongoose");

const profesionalSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    weight: Number,
    height: Number,
    isRetired: Boolean,
    nationality: String,
    oscarsNumber: Number,
    profession: String,
    photo: String
});

const Profesional = mongoose.model('Profesional', profesionalSchema);

module.exports = Profesional;
