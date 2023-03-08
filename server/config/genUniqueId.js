const generateUniqueId = require("generate-unique-id");

// example 1

const id = generateUniqueId({
  length: 6,
  useLetters: true,
  useNumbers: true
});
module.exports = {id};