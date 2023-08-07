import "./Chat.css";
import React, { useState, useRef } from "react";

function Chat() {
  const arr = [
    "hi !!",
    "how are you?",
    "what are you doing?",
    "ohh! then tell me about yourself",
    "interesting, you have a good sense of humor",
    "😂",
    "ok byee 😉",
  ];
  const [ind, setInd] = useState(1);
  const [msg, setMsg] = useState("");

  const [history, setHistory] = useState([]);
  const [qeshistory, setQeshistory] = useState([]);

  const ref = useRef(null);

  const change = (event) => {
    setMsg(event.target.value);
  };

  const click = () => {
    setHistory([...history, msg]);
  };

  const queschange = () => {
    setInd(ind + 1);
    setQeshistory([...qeshistory, arr[ind]]);
    ref.current.value = "";
  };

  const scollToRef = useRef();

  return (
    <div>
      <div className="chat">
        <div className="flex">
          <ul className="up-list">
            <li>
              <p>{arr[0]}</p>
            </li>
            <li>
              <p>
                {" "}
                {qeshistory.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </p>
            </li>
            <li></li>
            <li ref={scollToRef}>&nbsp;</li>
          </ul>
          <ul className="down-list">
            {history.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
      </div>
      <input ref={ref} onChange={change} placeholder="Enter the text.."></input>
      <button
        type="submit"
        onClick={() => {
          click();
          queschange();
          scollToRef.current.scrollIntoView();
        }}
      >
        submit
      </button>
    </div>
  );
}

export default Chat;
