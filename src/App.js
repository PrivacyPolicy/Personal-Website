import React, { Component } from 'react';
import './App.css';
import profile from './resources/profile.jpg';
import { faEnvelope, faBook, faDesktop, faCode, faFile } from '@fortawesome/fontawesome-free-solid';
import { faGithubSquare, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import ContactIcon from './ContactIcon.js';
import StoryIcon from './StoryIcon.js';
import CenteredTable from './CenteredTable.js';
import Project from './Project.js';
import { javaIcon, androidIcon, pythonIcon } from './TechIcons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <CenteredTable>
            <div>
              <img src={profile} style={{borderRadius: "50%", width: 300}} alt="My Chiseled Face"></img>
              <h2>Hi, I'm <span className="name">Gabriel Hutchison</span></h2>
              <h3>Full-Stack Developer | Web Nerd</h3>
              <div>
                <ContactIcon href="https://github.com/" title="GitHub" icon={ faGithubSquare } />
                <ContactIcon href="https://github.com/" title="LinkedIn" icon={ faLinkedin } />
                <ContactIcon href="https://github.com/" title="Email" icon={ faEnvelope } />
                <ContactIcon href="https://github.com/" title="Resume" icon={ faFile } />
              </div>
            </div>
          </CenteredTable>
        </section>

        <section>
          <CenteredTable className="responsive">
            <StoryIcon icon={ faBook } content="Full-stack Dev | Web Nerd" />
            <StoryIcon icon={ faDesktop } content="Full-stack Dev | Web Nerd" />
            <StoryIcon icon={ faCode } content="Full-stack Dev | Web Nerd" />
          </CenteredTable>
        </section>

        <section className="projects">
          <h1 className="title">Projects</h1>
          <Project
            title="Cool Cool"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum."
            technologies={[javaIcon, androidIcon]}
            demoLink="a"
            codeLink="b"
            image="https://cdn.lynda.com/course/506926/506926-636238695730179167-16x9.jpg" />
          <Project
            title="Cool Cool"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum."
            technologies={[androidIcon, pythonIcon]}
            demoLink="a"
            codeLink="b"
            image="https://d2118lkw40i39g.cloudfront.net/wp-content/uploads/2016/01/maxresdefault-4.jpg" />
          <Project
            title="Project Mandarin"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum."
            technologies={[javaIcon, androidIcon]}
            codeLink="b"
            infoLink="c"
            image="https://i.ytimg.com/vi/OfIQW6s1-ew/maxresdefault.jpg" />
        </section>
        <footer>
          Created with React.js by Gabriel Hutchison
        </footer>
      </div>
    );
  }
}

export default App;
