import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function StoryIcon(props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.icon} className="large-icon" />
      <p>{props.content}</p>
    </div>
  );
}
