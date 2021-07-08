import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./FeedChildrens/MessageSender";
import Posts from "./FeedChildrens/Posts";
import StoryReels from "./FeedChildrens/StoryReels";
import db from "../config/firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, [posts]);

  return (
    <div className="feed">
      <StoryReels />
      <MessageSender />
      {posts.map((post, id) => (
        <Posts
          key={id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          message={post.data.message}
          username={post.data.username}
          timestamp={post.data.timestamp}
          
        />
      ))}
    </div>
  );
}

export default Feed;
