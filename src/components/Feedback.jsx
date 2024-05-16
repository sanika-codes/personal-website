import React, { useState } from "react";
import thumbsUpImg from "../assets/images/thumbsup-outlined.png";
import thumbsUpFilledImg from "../assets/images/thumbsup-filled.png";
import thumbsDownImg from "../assets/images/thumbsdown-outlined.png";
import thumbsDownFilledImg from "../assets/images/thumbsdown-filled.png";
import sendIconImg from "../assets/images/send-icon.png";
import "./Feedback.scss";

function Feedback() {
  const [thumbsUpImage, setThumbsUpImage] = useState(thumbsUpImg);
  const [thumbsDownImage, setThumbsDownImage] = useState(thumbsDownImg);
  const [feedbackType, setFeedbackType] = useState("");
  const [feedbackAckMsg, setFeedbackAckMsg] = useState('');
 
  const changeUIOnFeedback = (type) => {
    setFeedbackType(type);
    if (type === "positive") {
      
      setThumbsUpImage(thumbsUpFilledImg);
    } else {
      setThumbsDownImage(thumbsDownFilledImg);
    }
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    
    let response = await fetch('/feedback', {
      method : 'POST',
      headers: {
        
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({
        feedback : data.get('feedback')
      })
    } );

    let result = await response.json();
    if(result.status === 'ok'){
      setFeedbackAckMsg('Appreciate your feedback, thank you.')
    }
    else{
      setFeedbackAckMsg('Sorry, unable to submit.')
    }


  }
  return (
    <div>
      Thank you for visiting. <br />
      {
        feedbackType === '' && <div id="collect-feedback">
        If you're a recruiting manager, please give me a
        <button
          onClick={() => {
            
            changeUIOnFeedback('positive');
          }}
        >
          <img src={thumbsUpImage} className="thumb" alt="Positive feedback" />
        </button>
        or{" "}
        <button
          onClick={() => {
            
            changeUIOnFeedback('negative');
          }}
        >
          <img
            src={thumbsDownImage}
            className="thumb thumb-down"
            alt="Negative feedback"
          />
        </button>
        for feedback!
      </div>
      }
      <div id="show-response">
        {feedbackType !== "" &&
          (feedbackType === "negative" ? (
            <form onSubmit={ e => submitFeedback(e)}>
              <label htmlFor="feedback">What can be better?</label>
              <input type="text" name="feedback" id="feedback" />
              <button type="submit" className="submit-feedback">
                {" "}
                <img src={sendIconImg} className="send" alt="Send feedback" />
              </button>
              <span >{feedbackAckMsg}</span>
            </form>
          ) : (
            <p>Thank you!</p>
          ))}
      </div>
    </div>
  );
}

export default Feedback;
