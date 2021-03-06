import React, { Component } from 'react';
import './App.css';
import profile from './resources/profile.jpg';
import {
  faEnvelope,
  faBook,
  faDesktop,
  faCode,
  faFile
} from '@fortawesome/fontawesome-free-solid';
import {
  faGithubSquare,
  faLinkedin
} from '@fortawesome/fontawesome-free-brands';
import ContactIcon from './ContactIcon.js';
import StoryIcon from './StoryIcon.js';
import CenteredTable from './CenteredTable.js';
import Project from './Project.js';
import {
  javaIcon,
  androidIcon,
  pythonIcon,
  htmlIcon,
  cssIcon,
  jsIcon,
  phpIcon,
  iosIcon,
  nodeIcon,
  ubuntuIcon,
  reactIcon
} from './tech-icons';
import ScrollAnimation from 'react-animate-on-scroll';
import './animations.css';
import './projects/schedule.png';
import './projects/polyhacks.png';
import './projects/autonomous-vehicle.jpg';
import './projects/tickets.png';
import './projects/tutoring.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <CenteredTable>
            <ScrollAnimation animateIn="fade-in-bottom" animateOnce="true">
              <img
                src={profile}
                style={{ borderRadius: '50%', width: 300 }}
                alt="My Chiseled Face"
              />
              <h2 className="name">
                Hi, I'm <span>Gabriel Hutchison</span>
              </h2>
              <h3>Full-Stack Developer | Non-Stop Creator</h3>
              <div>
                <ContactIcon
                  href="https://www.github.com/PrivacyPolicy/"
                  title="GitHub"
                  icon={faGithubSquare}
                />
                <ContactIcon
                  href="https://www.linkedin.com/in/gabriel-hutchison/"
                  title="LinkedIn"
                  icon={faLinkedin}
                />
                <ContactIcon
                  href="mailto:gabehwebsites@gmail.com"
                  title="GabeHwebsites@gmail.com"
                  icon={faEnvelope}
                />
                <ContactIcon
                  href="https://drive.google.com/file/d/1j3YiG45D2NH8G5UZiTO0q279PJv5v7NJ/view?usp=sharing"
                  title="Resume"
                  icon={faFile}
                />
              </div>
            </ScrollAnimation>
          </CenteredTable>
        </section>

        <section>
          <CenteredTable className="responsive">
            <StoryIcon
              icon={faBook}
              content="
              It all started when I grabbed a book on HTML4 back in 2012.
              I made a few websites in my spare time, and I just never stopped
              creating. One B.S. from Florida Polytechnic University and one
              AWS internship later, and I've solidified my love of software
              engineering.
              "
            />
            <StoryIcon
              icon={faDesktop}
              content="
              I code tons of random applications — sometimes desktop and mobile
              apps, but mainly web apps. This website is one of them!
              "
            />
            <StoryIcon
              icon={faCode}
              content="
              I work best with Java, JavaScript, and Python. I also know a lot of
              other backend languages and frontend frameworks, like Node.js and
              React.js.
              "
            />
          </CenteredTable>
        </section>

        <section className="projects">
          <h1 className="title">Projects</h1>
          <Project
            title="PolyHacks Website"
            description="I developed the website and the iOS app for my school's
              hackathon: PolyHacks. I was a dev team member for SHAPE, the
              school's hackathon club."
            technologies={[htmlIcon, cssIcon, jsIcon, phpIcon, iosIcon]}
            codeLink="https://github.com/PrivacyPolicy/PolyHacks-com"
            image={'./projects/polyhacks.png'}
          />
          <Project
            title="Florida Poly Tutoring Schedule"
            description="My school didn't have a system to provide information
              about tutor availability; I created this web app in response,
              which was adopted by the university. It graphically shows schedule
              information."
            technologies={[htmlIcon, cssIcon, jsIcon, phpIcon]}
            codeLink="https://github.com/PrivacyPolicy/Tutoring-Schedule"
            image={'./projects/tutoring.png'}
          />
          <Project
            title="smartTicket: Ticket Tracking System"
            description="My junior design project. A web app that tracks tickets
              submitted via the web app or via email, and presents the tickets
              to the helpdesk users."
            technologies={[nodeIcon, htmlIcon, cssIcon, jsIcon]}
            codeLink="https://github.com/criggs626/smartTicket"
            image={'./projects/tickets.png'}
          />
          <Project
            title="Autonomous Vehicle"
            description="A 1/10-scale, level 3 autonomous vehicle based on MIT RACECAR for
              my Autonomous Vehicles class."
            technologies={[pythonIcon, ubuntuIcon]}
            codeLink="https://github.com/Brent-Kuhn/Dat_Whip"
            image={'./projects/autonomous-vehicle.jpg'}
          />
          <Project
            title="Class Schedule Generator"
            description="A web app to generate a list of all possible
              course selections that match a student's requirements. The course data
              was scraped from the school's website with a Python scraper."
            technologies={[htmlIcon, cssIcon, jsIcon, pythonIcon]}
            codeLink="https://github.com/PrivacyPolicy/FloridaPolyScheduleGenerator"
            image={'./projects/schedule.png'}
          />
        </section>
        <footer>
          <a
            href="https://github.com/PrivacyPolicy/Personal-Website"
            target="_blank"
          >
            Created with React.js by Gabriel Hutchison
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
