import React from 'react';
import './CenteredTable.css';

export default function CenteredTable(props) {
  return (
    <div className={`centered ${ props["className"] || "" }`}>
      { props.children }
    </div>
  );
}
