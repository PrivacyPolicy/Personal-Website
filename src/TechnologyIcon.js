import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function TechnologyIcon(props) {
  const techIcons = props.technologies;
  if (techIcons === null || techIcons === undefined) return null;
  return (
    <div>
      {
        techIcons.map((techIcon, i) => {
          const {icon, title} = techIcon;
          return (
            <span title={title} key={i}>
              <FontAwesomeIcon className="techIcon" icon={icon} />
            </span>
          );
        })
      }
    </div>
  );
}
