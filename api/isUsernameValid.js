const Twitter = require("twitter");

module.exports = (req, res) => {
  const { username } = req.params;

  if (!username) {
    return res
      .status(400)
      .json({ type: "error", message: "No username in req params" });
  }

  // console.log("New request to validate " + username);
  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  const params = { screen_name: username };
  client
    .get("users/show", params)
    .then(user => {
      return res.json({ type: "success", isUsernameValid: !!user.id });
    })
    .catch(err => {
      return res.json({
        type: "error",
        message: "Error when checking usernames validity with twitter",
        errCode: err
      });
    });
};
