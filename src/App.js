import "./App.css";
import { experiences } from "./experience.js";
import { projects } from "./projects.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faDev, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="bigsection" id="ba">
          <div className="section" id="sa">
            <h1 id="name">JERRY LIN</h1>
            {/* <span id="selfie"></span> */}
            <div className="blurb">
              Hi, I'm a Grade 12 high school student in London, Ontario
              interested in a future in software engineering.
              <br />
              <br />
              Here are some of the things that I've been doing over the past few
              years.
            </div>
          </div>
        </div>
        <div className="bigsection" id="bb">
          <div className="section" id="sb">
            <h2>Experience</h2>
            {GenerateExperiences()}
          </div>
        </div>
        <div className="bigsection" id="bc">
          <div className="section" id="sc">
            <h2>Projects</h2>
            <div className="blurb">
              These are some of the personal projects that I've worked on in my free time.
            </div>
            {GenerateProjects()}
          </div>
        </div>
      </div>
    </div>
  );
}

function GenerateExperiences() {
  return experiences.map((exps, index) => {
    return (
      <div key={"experience-"+index} className="experiences">
        <div key={exps.title} className="exp-title">{exps.title}</div>
        <div key={exps.years} className="exp-years">{exps.years}</div>
        <div key="after-float" className="after-float" />
        <div key={exps.desc} className="exp-description">{exps.desc}</div>
      </div>
    );
  });
}
function GenerateProjects() {
  return projects.map((projs, index) => {
    return (
      <div key={"project"+index} className="experiences">
        <div key={projs.title} className="exp-title">{projs.title}</div>
        <div key={projs.years} className="exp-years">{projs.years}</div>
        <div key="after-float" className="after-float" />
        <div key="proj-desc-container" className="proj-desc-container">
          <img key={projs.image} className="proj-img" src={require("./images/"+projs.image).default}/>
          <div key={projs.desc} className="proj-description">{projs.desc}</div>
        </div>
        {GenerateProjectLinks(projs)}
      </div>
    );
  });
}
function GenerateProjectLinks(projs) {
  var arr = [];
  if (projs.github !== undefined) {
    arr.push(<a key="github" href={projs.github} className="proj-icon"><FontAwesomeIcon icon={faGithub} inverse/></a>);
  }
  if (projs.itchio !== undefined) {
    arr.push(<a key="itchio" href={projs.itchio} className="proj-icon"><FontAwesomeIcon icon={faItchIo} inverse/></a>);
  }
  if (projs.devpost !== undefined) {
    arr.push(<a key="devpost" href={projs.devpost} className="proj-icon"><FontAwesomeIcon icon={faDev} inverse/></a>);
  }
  return (
    <div key="proj-icons" className="proj-icons">
      {arr}
    </div>
  );
}

export default App;