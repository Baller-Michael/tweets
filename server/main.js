import { Meteor } from 'meteor/meteor';
import '../imports/api/tweets.js';
import { Tweets } from '../imports/api/tweets.js';

Meteor.startup(() => {
  Meteor.methods({

    'postTweet': function ({ userId }) {

      Twit = require('twit');

      T = new Twit({
        consumer_key: 'KVUdZnLuyYKFNWD1DGD8QaHhd',
        consumer_secret: 'dAGbwsX8kbMD7og4WtxkIGGeUYB4WwKVhCXiMcEZf1F15IsVKC',
        access_token: '1118775628961132544-W9qwTlD9lSIUnLu9Z6l41laHl3r3nY',
        access_token_secret: 's9gu9LT79FkLi3i3dcyghTZzuVecgO1ixYf0LPXoL4d9W',
        timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL: true,
      });
      const getTweets = Meteor.wrapAsync(T.get, T);

      try {
        return getTweets('statuses/user_timeline', { screen_name: userId, count: 100 });
      } catch (error) {
        throw new Meteor.Error(error.name, error.message);
      }

    },
    'consolePP': function () {
      Tweets.remove({})
    },
    'saveTweet': function (tweet) {
      Tweets.insert({ tweet })
    }
  });
});
