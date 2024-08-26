import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <h2>Mohd Aftab</h2>
                <div className="footer-social">
                    <a href="https://www.facebook.com/devaftab/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
                    <a href="https://twitter.com/learning_aftab" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                    <a href="https://www.instagram.com/dev_aftab/" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>
            <div className="copyright">
                <p>Create By <a href="#">Mohd Aftab</a> | &copy; All Right Reserved.</p>
            </div>
        </>
    );
}

export default Footer;
