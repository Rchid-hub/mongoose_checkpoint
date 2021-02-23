const mongoose = require("mongoose");
const express = require("express");
const schema = mongoose.Schema;

const person = new schema({
  name: { type: String, required: true },
  age: { type: Number, required:true },
  favouriteFoods:{type :[String]}
});

module.exports = Person = mongoose.model("persons", person);