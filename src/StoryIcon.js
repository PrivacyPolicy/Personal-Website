import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './StoryIcon.css';
import ScrollAnimation from 'react-animate-on-scroll';
import './animations.css';

export default function StoryIcon(props) {
  return (
    <ScrollAnimation className="storyIcon" animateIn="fade-in-bottom" animateOnce="true">
      <div className="iconContainer">
        <FontAwesomeIcon icon={props.icon} className="large-icon" />
      </div>
      <p>{props.content}</p>
    </ScrollAnimation>
  );
}
