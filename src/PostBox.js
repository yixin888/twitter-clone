import React, { useState } from 'react';
import "./PostBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function PostBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Lin',
            username: "clever girl",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/originals/a4/df/1e/a4df1e5b8f552c831c1b0953e1aa72ee.jpg"

        });

        setTweetMessage("");
        setTweetImage("");
    };
    
    return (
        <div className="postBox">
            <form >
                <div className="postBox__input">
                    <Avatar src="https://i.pinimg.com/originals/a4/df/1e/a4df1e5b8f552c831c1b0953e1aa72ee.jpg" />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} 
                    placeholder="What's happening" 
                    type="text"/>
                    
                </div>
                <input 
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
                className="postBox__Imageinput" 
                placeholder="Optional: Enter image URL" 
                type="text"
                />

                <Button onClick={sendTweet} type="submit" className="postBox__postButton">Tweet</Button>
            </form>
        </div>
    )
}

export default PostBox;
