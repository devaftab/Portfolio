import { useEffect } from "react";
import "./Navbar.css";


function Navbar() {


    useEffect(() => {
        const header = document.querySelector('header');
        const menu = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const darkmode = document.querySelector('#darkmode');

        window.onload = () => {
            document.body.classList.add('active');
        }

        const handleScroll = () => {
            header.classList.toggle('shadow', window.scrollY > 0);
            navbar.classList.remove('active');
        }
        const handleMenuClick = () => {
            navbar.classList.toggle('active');
        };
        const handleDarkModeToggle = () => {
            if (darkmode.classList.contains('bx-sun')) {
                darkmode.classList.replace('bx-sun', 'bx-moon');
                document.body.classList.add('active');
            } else {
                darkmode.classList.replace('bx-moon', 'bx-sun');
                document.body.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleScroll);
        menu.addEventListener('click', handleMenuClick);
        darkmode.addEventListener('click', handleDarkModeToggle);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            menu.removeEventListener('click', handleMenuClick);
            darkmode.removeEventListener('click', handleDarkModeToggle);
        };
    }, []);



    return (
        <header>
            <a href="#" className="logo">Techno<span>phile</span></a>
            <div className="bx bx-menu" id="menu-icon"></div>
            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <div className="bx bx-moon" id="darkmode"></div>
            </ul>
        </header>
    );
}

export default Navbar;
