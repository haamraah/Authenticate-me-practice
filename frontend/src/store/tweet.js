// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const ADD_TWEET = 'tweet/addTweet';
const DELETE_TWEET = 'tweet/deleteTweet'
//regular action creator
const loadTweets = (tweets) => {
  return {
    type: GET_ALL_TWEETS,
    tweets
  };
};
const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  };
};
const deleteTweet = (tweetID) => {
  return {
    type: DELETE_TWEET,
    tweetID
  };
};
// thunk action creator
export const getAllTweets = () => async (dispatch) => {
  const response = await fetch('/api/tweets');

  if (response.ok) {
    const data = await response.json();

    dispatch(loadTweets(data));
    return data;
  }
};
export const postTweet = (tweet) => async (dispatch) => {
  console.log('tweet in store postTweet',tweet)
  const response = await fetch('/api/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tweet)
  });

  if (response.ok) {
    const data = await response.json();

    dispatch(addTweet(data));
    return data;
  }
};
export const removeTweet = (tweetID) => async (dispatch) => {
  console.log('tweet in store removeTweet',tweetID)
  const response = await fetch(`/api/tweets/${tweetID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    const data = await response.json();
    console.log('removeTweet thunk - data',data)

    dispatch(deleteTweet(data.id));
    return data;
  }
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TWEETS: {
      const newState = {};
      action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
      return newState;
    }
    case ADD_TWEET: {
      const newState = {...state};
      newState[action.tweet.id] = action.tweet;
      return newState;
    }
    default:
      return state;
  }
};

export default tweetsReducer;
