import React from 'react';
import './ContactIcon.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function ContactIcon(props) {
  return (
    <div className="contact-icon-container">
      <a href={props.href} target="_blank" className="scale-up-center">
        <FontAwesomeIcon icon={props.icon} className="contact-icon" />
      </a>
      <div className="tooltip">
        {props.title || ""}
      </div>
    </div>
  );
}
