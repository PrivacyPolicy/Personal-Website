import React from 'react';
import './Project.css';
import TechnologyIcon from './TechnologyIcon';

function toFaIcons(techIcons) {
  return <TechnologyIcon technologies={techIcons} />;
}

function demoButton(link) {
  return button("Demo", link);
}

function codeButton(link) {
  return button("Code", link);
}

function infoButton(link) {
  return button("More Info", link);
}

function button(text, link) {
  if (link === null || link === undefined || link === "") return null;
  return (
    <a href={ link } target="_blank" className="button">
      { text }
    </a>
  );
}

export default function Project(props) {
  const containerStyle = {
    backgroundImage: `url(${props.image})`
  };
  return (
    <div className="container">
      <div className="image blurred" style={ containerStyle }></div>
      <div className="image" style={ containerStyle }></div>
      <div className="content">
        <div className="top">
          <h1>{ props.title }</h1>
          <p className="description">{ props.description }</p>
        </div>
        <div className="bottom">
          { toFaIcons(props.technologies) }
          <br />
          { demoButton(props.demoLink) }
          { codeButton(props.codeLink) }
          { infoButton(props.infoLink) }
        </div>
      </div>
    </div>
  );
}
