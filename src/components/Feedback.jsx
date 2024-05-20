import React, { useState, useRef } from "react";
import thumbsUpImg from "../assets/images/thumbsup-outlined.png";
import thumbsDownImg from "../assets/images/thumbsdown-outlined.png";
import sendIconImg from "../assets/images/send-icon.png";
import "./Feedback.scss";

function Feedback() {
  
  const [feedbackType, setFeedbackType] = useState("");
  const feedbackComment = useRef("");
  const [feedbackAckMsg, setFeedbackAckMsg] = useState("");

  const handleFeedbackType = (type) => {
    setFeedbackType(type);  
  
  };



  const submitFeedback = async (e) => {
    if(e) e.preventDefault();
    console.log(feedbackType);
    let response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      positive: feedbackType === "positive",
        negative: feedbackType === "negative", 
     
        comment: feedbackComment.current.value,
      }),
    });

    let result = await response.json();
    if (result.status === "ok") {
      setFeedbackAckMsg("Appreciate your feedback, thank you.");
    } else {
      setFeedbackAckMsg("Sorry, unable to submit.");
    }
    
  };
  return (
    <div>
      Thank you for visiting. <br />
      {feedbackType === "" ? (
        <div id="collect-feedback">
          If you're a recruiting manager, please give me a
          <button
            onClick={() => {
              handleFeedbackType("positive");
            }}
          >
            <img
              src={thumbsUpImg}
              className="thumb"
              alt="Positive feedback"
            />
          </button>
          or{" "}
          <button
            onClick={() => {
              handleFeedbackType("negative");
            }}
          >
            <img
              src={thumbsDownImg}
              className="thumb thumb-down"
              alt="Negative feedback"
            />
          </button>
          for feedback!
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            submitFeedback(e);
          }}
        >
          <label htmlFor="feedback">What can be better?</label>
          <input type="text" name="feedback" id="feedback" ref={feedbackComment}/>
          <button type="submit" className="submit-feedback">
            {" "}
            <img src={sendIconImg} className="send" alt="Send feedback" />
          </button>
          <span id="feedbackAckMsg">{feedbackAckMsg}</span>
        </form>
      ) }
    
    </div>
  );
}

export default Feedback;
