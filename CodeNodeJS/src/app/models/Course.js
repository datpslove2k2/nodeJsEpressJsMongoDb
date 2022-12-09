const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String, require: true, maxLength: 600},
    image: {type: String, require: true, maxLenght: 255},
    videoId: {type: String, require: true, maxLenght: 255},
    level: {type: String, require: true, maxLenght: 255},
    slug: {type: String, slug: 'name', unique: true},
  }, {
    timestamps: true,
  });

module.exports = mongoose.model('Course', Course);