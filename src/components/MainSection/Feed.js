import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import FeedOption from "./FeedOption";
import Post from "./post/Post";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../Firebase";
import firebase from "../../Firebase"
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";


function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => {
        return (
          {
            id:doc.id,
            data:doc.data(),
          }
        )
      }))
    })
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name:user.displayName,
      description:user.email,
      message:input,
      photUrl:user.photoUrl || user.email[0],
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)} type="text" name="" id="" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <FeedOption Icon={ImageIcon} title="Photos" color="#70B5F9" />

          <FeedOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />

          <FeedOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />

          <FeedOption Icon={CalendarViewDayIcon} title="Write Article" color="#7fc15e" />
        </div>
      </div>

        {posts.map(({ id, data: {name, description,message,photUrl}}) => {
           return(
            <Post 
              key={id}
              name={user.displayName}
              description={description}
              message={message}
              photoUrl={photUrl}
            />
           )
        })}

    </div>
  );
}

export default Feed;
