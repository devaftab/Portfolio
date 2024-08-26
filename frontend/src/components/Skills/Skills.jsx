import React from "react";
import "./Skills.css";

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="heading">
                <h2>Skills</h2>
                <span>My Skills</span>
            </div>
            <div className="skills-grid">
                <div className="skill-card">
                    <img src="/img/icons/cpp.png" alt="C++" className="skill-icon" />
                    <h3>C++</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/python.png" alt="Python" className="skill-icon" />
                    <h3>Python</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/react.png" alt="ReactJs" className="skill-icon" />
                    <h3>ReactJs</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/nodejs.png" alt="NodeJs" className="skill-icon" />
                    <h3>NodeJs</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/mongodb.png" alt="mongoDB" className="skill-icon" />
                    <h3>MongoDB</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/sql.png" alt="sql" className="skill-icon" />
                    <h3>SQL</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/git.png" alt="Git Source Control" className="skill-icon" />
                    <h3>Git</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/github.png" alt="github" className="skill-icon" />
                    <h3>Github</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/linux.png" alt="linux" className="skill-icon" />
                    <h3>Linux</h3>
                </div>
                <div className="skill-card">
                    <img src="/img/icons/hacker.png" alt="hacker" className="skill-icon" />
                    <h3>Bug Bounty</h3>
                </div>
            </div>
        </section>
    );
}

export default Skills;

