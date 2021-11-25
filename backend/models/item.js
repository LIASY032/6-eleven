const Joi = require("joi");
const mongoose = require("mongoose");

//   "image": "images/banana.webp",
//             "title": "banana",
//             "price": 3,
//             "info": "This is a banana",
//             "collectionType": "produce"

const itemSchema = new mongoose.Schema({
  image: String,
  title: {
    type: String,
    require: true,
  },
  price: Number,
  info: String,
  collectionType: { type: String, require: true },
  weeklyDeal: {
    type: Boolean,
    require: false,
    default: false,
  },
});

const Item = mongoose.model("Item", itemSchema);

function validateItem(item) {
  const schema = Joi.object({
    image: Joi.string(),
    title: Joi.string().required(),
    collectionType: Joi.string().required(),
    price: Joi.number(),
    info: Joi.string(),
  });
  return schema.validate(item);
}

exports.Item = Item;
exports.itemSchema = itemSchema;
exports.validate = validateItem;
