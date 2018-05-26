import React from 'react';



export default function CenteredTable(props) {
  return (
    <div className={`centered ${ props["className"] || "" }`}>
      { props.children }
    </div>
  );
}
