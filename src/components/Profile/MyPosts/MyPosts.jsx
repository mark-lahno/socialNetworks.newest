import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {

  let postElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    props.updateNewPostText(text)

  }

  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
      </div>
      <div className={classes.post}>
        {postElement}
      </div>
    </div >
  );
}

export default MyPosts;