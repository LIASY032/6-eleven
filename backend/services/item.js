const { Item } = require("../models/item");
const Redis = require("redis");
const reportError = require("./reportError");
const redisClient = Redis.createClient();
const DEFAULT_EXPIRATION = 86400000;

const findItemsByUser = async (user, callback) => {
  const carts = user.carts;

  await itemsOnRedis((items) => {
    let results = [];
    carts.forEach((cart) => {
      items.forEach((item) => {
        if (cart._id === item._id) {
          item.count = cart.count;
          results.push(item);
        }
      });
    });

    callback(results);
  });
};

const itemsOnRedis = async (callback) => {
  redisClient.get("items", async (error, items) => {
    if (error)
      reportError("Redis server doesn't not set up or something error", error);
    if (items != null) {
      callback(JSON.parse(items));
    } else {
      // if redis does not have items, items will be found in database.
      const storeItems = await Item.find().sort("title");

      // set items in redis
      redisClient.setex(
        "items",
        DEFAULT_EXPIRATION,
        JSON.stringify(storeItems)
      );

      callback(storeItems);
    }
  });
};

module.exports = { itemsOnRedis, findItemsByUser };
