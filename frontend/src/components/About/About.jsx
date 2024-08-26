import "./About.css";

function About() {
    return (
        <section className="about" id="about">
            <div className="heading">
                <h2>About Me</h2>
                <span>Introduction</span>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img src="/img/121.jpg" alt="About" />
                </div>
                <div className="about-text">
                    <p>
                        Hi there, <br />
                        This is Mohd Aftab, technophile. I am pursuing my B.Tech in Computer Science And Engineering from USICT Delhi.<br />
                        I am a rapid learner focused on my goal. I always try new technologies to add to my skills.
                    </p>
                    <div className="information">
                        <div className="info-box">
                            <i className="bx bxs-user"></i>
                            <span>Mohd Aftab</span>
                        </div>
                        <div className="info-box">
                            <i className="bx bxs-phone"></i>
                            <span>+91 8743897076</span>
                        </div>
                        <div className="info-box">
                            <i className="bx bxs-envelope"></i>
                            <span>web.dev.aftab@gmail.com</span>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1fA7b9mgGmdnkGrgDICG_g03caV7SAeRY/view?usp=sharing" target="_blank" className="btn">Download CV</a>
                </div>
            </div>
        </section>
    );
}

export default About;
