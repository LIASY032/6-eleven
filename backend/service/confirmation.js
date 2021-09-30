var nodemailer = require("nodemailer");
const config = require("config");
module.exports = function (userEmail) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.get("sixelevenPrivateKey"),
      pass: "s125346e",
    },
  });

  var mailOptions = {
    from: "s1287673784@gmail.com",
    to: "s1160137289@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
