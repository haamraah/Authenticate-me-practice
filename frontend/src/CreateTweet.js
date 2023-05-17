import React, { useState } from 'react';
import { postTweet } from './store/tweet'
import { useDispatch } from 'react-redux';

const CreateTweet = () => {
    const [tweetText, setTweetText] = useState('');
    const dispatch = useDispatch();

    const handleTweetChange = (event) => {
        setTweetText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // logic to handle submitting the tweet
        console.log('tweetText in comp', tweetText)
        dispatch(postTweet({ message: tweetText }))
        setTweetText('')
    };

    return (
        <>
       
        <h1>POST YOUR TWEET</h1>
        <form onSubmit={handleSubmit}>
            <textarea
                value={tweetText}
                onChange={handleTweetChange}
                placeholder="What's on your mind?"
            /> <br></br>
            <button type="submit">Tweet</button>
        </form>
        </>
    );
};

export default CreateTweet;
