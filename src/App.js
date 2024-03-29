import "./App.css";
import "./responsive.css";
import { experiences } from "./experience.js";
import { projects } from "./projects.js";
import { params } from "./particlesParam";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import parse from "html-react-parser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faDev, faGithub, faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCircle, faCoffee, faLink } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
library.add(fab, faCheckSquare, faCoffee);

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div>
            <div className="wrapper">
                <div className="bar">
                    <div className="bar-btns-container">
                        <a href="#experience" className="bar-btn">
                            Experience
                        </a>
                        <a href="#projects" className="bar-btn">
                            Projects
                        </a>
                        <a href="#contact" className="bar-btn">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="bigsection" id="ba">
                    {ParticleBg()}
                    <div className="section" id="sa">
                        <h1 id="name">Jerry Lin</h1>
                        <div className="blurb">
                            Hi, I'm a student from London, Ontario currently studying computer science at UoT.
                            <br />
                            <br />
                            Check out some of the things that I've been doing over the past few years!
                        </div>
                    </div>
                </div>
                <div className="bigsection" id="experience">
                    <div className="section" id="sb">
                        <h2>Experience</h2>
                        {GenerateExperiences()}
                    </div>
                </div>
                <div className="bigsection" id="projects">
                    <div className="section" id="sc">
                        <h2>Projects</h2>
                        <div className="blurb">
                            These are some of the personal projects that I've worked on in my free time.
                        </div>
                        {GenerateProjects()}
                    </div>
                </div>
                <div className="bigsection" id="bd">
                    <div className="section" id="sd">
                        <h2 id="contact">Contact</h2>
                        <div className="contact-links-container">
                            <a href="mailto:jerrylin9969@gmail.com" className="contact-link">
                                jerrylin9969@gmail.com
                            </a>
                            <FontAwesomeIcon className="link-circle" icon={faCircle} />
                            <a href="https://github.com/JerryLin1" className="contact-link" target="_blank">
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function GenerateExperiences() {
    return experiences.map((exps, index) => {
        if (!exps?.hidden) {
            return (
                <div key={"experience-" + index} className="experiences" data-aos="fade-up">
                    <div key={exps.title} className="exp-title">
                        {exps.title}
                    </div>
                    <div key={exps.years} className="exp-years">
                        {exps.years}
                    </div>
                    <div key="after-float" className="after-float" />
                    <div key={exps.desc} className="exp-description">
                        {exps.desc}
                    </div>
                </div>
            );
        } else return null;
    });
}
function GenerateProjects() {
    return projects.map((projs, index) => {
        if (!projs?.hidden) {
            return (
                <div key={"project" + index} className="experiences" data-aos="fade-up">
                    <div key={projs.title} className="exp-title">
                        {projs.title}
                    </div>
                    <div key={projs.years} className="exp-years">
                        {projs.years}
                    </div>
                    <div key="after-float" className="after-float" />
                    <div key="proj-desc-container" className="proj-desc-container">
                        <img key={projs.image} className="proj-img" src={require("./images/" + projs.image).default} />
                        <div key={projs.desc} className="proj-description">
                            {parse(projs.desc)}
                        </div>
                    </div>
                    {GenerateProjectLinks(projs)}
                </div>
            );
        } else return null;
    });
}
function GenerateProjectLinks(projs) {
    var arr = [];
    if (projs.github !== undefined) {
        arr.push(
            <a key="github" href={projs.github} className="proj-icon" target="_blank">
                <FontAwesomeIcon icon={faGithub} inverse />
            </a>
        );
    }
    if (projs.link !== undefined) {
        arr.push(
            <a key="generalLink" href={projs.link} className="proj-icon" target="_blank">
                <FontAwesomeIcon icon={faLink} inverse />
            </a>
        );
    }
    if (projs.itchio !== undefined) {
        arr.push(
            <a key="itchio" href={projs.itchio} className="proj-icon" target="_blank">
                <FontAwesomeIcon icon={faItchIo} inverse />
            </a>
        );
    }
    if (projs.devpost !== undefined) {
        arr.push(
            <a key="devpost" href={projs.devpost} className="proj-icon" target="_blank">
                <FontAwesomeIcon icon={faDev} inverse />
            </a>
        );
    }
    return (
        <div key="proj-icons" className="proj-icons">
            {arr}
        </div>
    );
}

function ParticleBg() {
    return <Particles className="particles" params={params} />;
}

export default App;
