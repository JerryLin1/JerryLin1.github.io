import "./App.css";
import { experiences } from "./experience.js";
import { projects } from "./projects.js";

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
              These are some of the things that I've made in my free time.
            </div>
            {GenerateProjects()}
          </div>
        </div>
      </div>
    </div>
  );
}
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  console.log(images);
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function GenerateExperiences() {
  return experiences.map((exps, index) => {
    return (
      <div className="experiences">
        <div className="exp-title">{exps.title}</div>
        <div className="exp-years">{exps.years}</div>
        <div className="after-float" />
        <div className="exp-description">{exps.desc}</div>
      </div>
    );
  });
}
function GenerateProjects() {
  return projects.map((projs, index) => {
    return (
      <div className="experiences">
        <div className="exp-title">{projs.title}</div>
        <div className="exp-years">{projs.years}</div>
        {console.log(images[projs.image])}
        <img src={images[projs.image]}/>
        <div className="after-float" />
        <div className="exp-description">{projs.desc}</div>
      </div>
    );
  });
}


export default App;
