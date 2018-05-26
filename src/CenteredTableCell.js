import React from 'react';

export default function CenteredTable(props) {
  return (
    <div style={{marginLeft: "auto", marginRight: "auto"}}>
      {props.children}
    </div>
  );
}
