import { Avatar } from "@material-ui/core";
import {
  EmojiEmotions,
  PhotoAlbum,
  VideocamOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import db from "../../config/firebase";
import "./MessageSender.css";
import firebase from "firebase";
import { useStateValue } from "../../config/StateProvider";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      image: imageUrl,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user.displayName,
      profilePic: user.photoURL,
    });
    setImageUrl("");
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user?.photoURL} />
        <form>
          <input
            value={input}
            className="messageSender__topInput"
            placeholder={`What's on your mind. ${user?.displayName}`}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            value={imageUrl}
            placeholder="Add image Url here"
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={sendPost}>post</button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <VideocamOutlined fontSize="large" style={{ color: "red" }} />
        <h3>Live Video</h3>
        <PhotoAlbum fontSize="large" style={{ color: "green" }} />
        <h3>Photo / Video</h3>
        <EmojiEmotions fontSize="large" style={{ color: "#FFC300 " }} />
        <h3>Feeling / Activity</h3>
      </div>
    </div>
  );
}

export default MessageSender;
