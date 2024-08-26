import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="heading">
                <h2>Portfolio</h2>
                <span>My Recent Work</span>
            </div>
            <div className="portfolio-content">
                <div className="portfolio-items">
                    <img className="portfolio-img" src="/img/projects/p1.png" alt="Portfolio" />
                    <span>This is a personal portfolio website developed to showcase my skills, projects, and experiences. The website is built using MERN Stack, and it features a clean and modern design. It is fully responsive, ensuring it looks great on all devices.</span>
                    <div className="links">
                        <a href="https://github.com/devaftab/Portfolio" target="_blank">
                            <i class="fa-brands fa-github"></i> Github Repo
                        </a>
                        <a href="devaftab.xyz" target="_blank">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
                <div className="portfolio-items">
                    <img className="portfolio-img" src="/img/projects/ecommerce.png" alt="Portfolio" />
                    <span>An ecommerce website offering a wide range of products with a seamless shopping experience, featuring easy navigation, secure payments. Admin dashboar to manage products and orders.</span>
                    <div className="links">
                        <a href="https://github.com/devaftab/MERN_Ecommerce" target="_blank">
                            <i class="fa-brands fa-github"></i> Github Repo
                        </a>
                        <a href="https://onlineshop.devaftab.xyz/" target="_blank">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>
                <div className="portfolio-items">
                    <img className="portfolio-img" src="/img/projects/tour.png" alt="Portfolio" />
                    <span>Developed a user-friendly travel platform with responsive design, secure booking, and real-time travel information. Integrated feedback and rating system to enhance service quality and customer satisfaction.</span>
                    <div className="links">
                        <a href="https://github.com/devaftab/Tour_and_Travel" target="_blank">
                            <i class="fa-brands fa-github"></i> Github Repo
                        </a>
                        <a href="https://tour-and-travel-jif8.onrender.com/home" target="_blank">
                            <i className="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
