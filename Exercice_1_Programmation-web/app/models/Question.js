const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  enonce: {
    type: String,
    required: true
  },
  reponse1: {
    type: String,
    required: true
  },
  reponse2: {
    type: String,
    required: true
  },
  bonneReponse: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;