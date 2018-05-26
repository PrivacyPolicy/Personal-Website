import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './StoryIcon.css';

export default function StoryIcon(props) {
  return (
    <div className="storyIcon">
      <div className="iconContainer">
        <FontAwesomeIcon icon={props.icon} className="large-icon" />
      </div>
      <p>{props.content}</p>
    </div>
  );
}
