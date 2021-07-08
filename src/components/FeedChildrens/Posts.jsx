import { Avatar, IconButton } from "@material-ui/core";
import {
  AccountCircle,
  ChatBubble,
  ExpandMore,
  Share,
  ThumbUp,
} from "@material-ui/icons";
import React from "react";
import "./Posts.css";

function Posts({ profilePic, image, message, username, timestamp }) {
  return (
    <div className="posts">
      <div className="posts__top">
        <Avatar src={profilePic}/>
        <div className="posts__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toDateString()}</p>
        </div>
      </div>

      <div className="posts__caption">
        <p>{message}</p>
      </div>
      <div className="posts__image">
        <img
          src={image}
          alt=""
        />
      </div>

      <div className="posts__options">
        <div className="posts__optionsLeft">
          <div className="posts__option">
            <IconButton>
              <ThumbUp />
              <p>Like</p>
            </IconButton>
          </div>
          <div className="posts__option">
            <IconButton>
              <ChatBubble />
              <p>Message</p>
            </IconButton>
          </div>
          <div className="posts__option">
            <IconButton>
              <Share />
              <p>Share</p>
            </IconButton>
          </div>
        </div>
        <div className="posts__optionRight">
          <IconButton>
            <AccountCircle />
            <ExpandMore />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Posts;
