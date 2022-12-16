exports.postAddNewUser = (req, res) => {
  const userName = req.body.userName;
  const timeDelay = req.body.timeDelay;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;

  // Do something with the form data here, like save it to a database.

  res.send(
    `Successfully submitted form data: ${userName}, ${timeDelay}, ${email}, ${phoneNumber}`
  );
};
