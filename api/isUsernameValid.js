const Twitter = require("twitter");

const twitter_consumer_key = process.env.TWITTER_CONSUMER_KEY
const twitter_consumer_secret = process.env.TWITTER_CONSUMER_SECRET
const twitter_access_token_key = process.env.TWITTER_ACCESS_TOKEN_KEY
const twitter_access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET

module.exports = (req, res) => {
  const { query: { username } } = req;
  console.log(req)
  if (!username) {
    return res
      .status(400)
      .json({ type: "error", message: "No username in req params" });
  }

  // console.log("New request to validate " + username);
  const client = new Twitter({
    consumer_key: twitter_consumer_key,
    consumer_secret: twitter_consumer_secret,
    access_token_key: twitter_access_token_key,
    access_token_secret: twitter_access_token_secret
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
