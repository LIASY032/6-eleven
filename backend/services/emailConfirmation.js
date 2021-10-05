var nodemailer = require("nodemailer");
const config = require("config");
module.exports = function (userEmail, text, subject = "6-Eleven MFA code") {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.get("emailAuth").email,
      pass: config.get("emailAuth").password,
    },
  });

  var mailOptions = {
    from: config.get("emailAuth").email,
    to: userEmail,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
