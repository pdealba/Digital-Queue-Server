const User = require("../models/user");

exports.postAddNewUser = (req, res) => {
  const userName = req.body.userName;
  const timeDelay = req.body.timeDelay;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  // Do something with the form data here, like save it to a database.

  const product = new User({
    userName,
    email,
    phoneNumber,
    timeDelay,
  });
  product
    .save()
    .then((result) => {
      console.log(`saved user information: ${result}`);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send(
    `Successfully submitted form data: ${userName}, ${timeDelay}, ${email}, ${phoneNumber}`
  );
};
