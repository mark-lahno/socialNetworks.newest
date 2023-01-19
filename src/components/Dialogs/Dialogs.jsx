import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messageElemnts = props.state.messages.map(m => <Message message={m.message} />)

  let newMessage = React.createRef()

  let send = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messageElemnts}
        <textarea ref={newMessage}></textarea>
        <button onClick={send}>send</button>
      </div>
    </div>
  );
}

export default Dialogs;
