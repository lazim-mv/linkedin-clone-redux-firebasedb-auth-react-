import React from "react";
import { Avatar } from "@material-ui/core";
import FeedOption from "../FeedOption";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatIcon from "@material-ui/icons/Chat";
import SendIcon from "@material-ui/icons/Send";
import ShareOutlined from '@material-ui/icons/ShareOutlined';


function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post_header">
        <Avatar>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <FeedOption Icon={ThumbUpIcon} title="Like" color="gray" />
        <FeedOption Icon={ChatIcon} title="Comment" color="gray" />
        <FeedOption Icon={ShareOutlined} title="Share" color="gray" />
        <FeedOption Icon={SendIcon} title="Like" Send="gray" />
      </div>
    </div>
  );
}

export default Post;
