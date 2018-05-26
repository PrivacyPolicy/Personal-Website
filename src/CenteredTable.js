import React from 'react';
import CenteredTableCell from './CenteredTableCell';



export default function CenteredTable(props) {
  return (
    <div className={`centered ${ props["className"] || "" }`}>
      {
        React.Children.map(props.children, (cell) => CenteredTableCell({children: cell}))
      }
    </div>
  );
}
