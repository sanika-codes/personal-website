import React from 'react';
import flowerImg from '../../assets/images/flower.png';

function ContactItem({text, link}) {
  return (
    <div className="contact-item">
        <img src={flowerImg} alt="" />
        <h3>
          <a
            href={link}
            target="_blank"
            rel="noreferer"
          >
            {text}
          </a>
        </h3>
      </div>
  )
}

export default ContactItem