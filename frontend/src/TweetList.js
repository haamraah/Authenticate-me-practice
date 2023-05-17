import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTweets, removeTweet } from './store/tweet';

const TweetList = () => {
  const dispatch = useDispatch();
  const tweetList = useSelector((state) => Object.values(state.tweet));
  console.log(tweetList);

  useEffect(() => {
    dispatch(getAllTweets());
  }, [dispatch]);
  
  const handleDelete = (e) => {
    const tweetID = e.target.id;
    dispatch(removeTweet(tweetID))
      .then(() => dispatch(getAllTweets()));
  }
  return (
    <>
      <h1>Tweet List</h1>
      {tweetList?.map(({ id, message }) => (
        < div key={id}>
          <p >{message}</p>
          <a id={id} href='' onClick={handleDelete}>X</a>
        </div>
      ))}
    </>
  );
};

export default TweetList;
