var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

//Below is example create a schema
var PetSchema = new mongoose.Schema({
    name: { type: String, required: 'Your name must be longer than 3 characters', trim: true, minlength: 3, unique: [true, 'Pet name already exists']},
    type: { type: String, required: 'Type must be longer than 3 characters, trim: true, minlength: 3'},
    description: { type: String, required: 'Description must be longer than 3 characters', trim: true, minlength: 3 },
    skill1: { type: String},
    skill2: { type: String},
    skill3: { type: String},
    like_count: { type: Number, default: 0 }
},{ timestamps: true })

PetSchema.plugin(uniqueValidator);

mongoose.model('PetShelter', PetSchema); 
