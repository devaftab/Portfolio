import "./Home.css";
import Typed from "typed.js";
import { useEffect } from "react";

function Home() {

  useEffect(() => {
    const options = {
      strings: ["Mern Stack Developer", "Designer", "Programmer"],
      typeSpeed: 100,
      backSpeed: 60,
      cursorChar: "",
      loop: true,
    };

    const typed = new Typed(".typing", options);

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section className="home" id="home">
      <div className="social">
        <a
          href="https://github.com/devaftab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/devaftab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          href="mailto:web.dev.aftab@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-gmail"></i>
        </a>
      </div>
      <div className="home-img">
        <img src="/img/profile_img.png" alt="Profile" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1>Mohd Aftab</h1>
        <div className="typed-box"><h2 className="typing"></h2></div>

        <p>
          I am a rapid learner focused on my goal. I always try new technologies to
          add to my skills.
        </p>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
