var CronJob = require("cron").CronJob;
const { User } = require("../models/user");
module.exports = function (req, res, next) {
  var job = new CronJob(
    "0 1 * * * *",
    async function () {
      const users = await User.find();
      for (const i in users) {
        if (i.status === "Pending") {
          await User.findByIdAndRemove(i._id);
        }
      }
    },
    null,
    true,
    "America/Los_Angeles"
  );
  job.start();
  next();
};
