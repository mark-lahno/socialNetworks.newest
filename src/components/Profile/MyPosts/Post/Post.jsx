import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.ytimg.com/vi/XzRObU7QoAI/hqdefault.jpg"></img>
      {props.message}
      <div>
        <span>{props.likeCount} likes</span>
      </div>
    </div>
  );
}

export default Post;