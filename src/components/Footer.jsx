import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.facebook.com/tu_facebook" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                    <img
                        className="icon"
                        src="https://www.iconarchive.com/download/i54037/danleech/simple/facebook.ico"
                        alt=""
                    />
                </a>
                <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                    <img
                        className="icon"
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                        alt=""
                    />
                </a>
                <a href="mailto:info@tudistribuidora.com">
                    <i className="far fa-envelope"></i>
                    <img
                        className="icon"
                        src="https://static.vecteezy.com/system/resources/thumbnails/002/557/425/small/google-mail-icon-logo-isolated-on-transparent-background-free-vector.jpg"
                        alt=""
                    />
                </a>
            </div>
            <p className="rights">© 2023 Tu Shop para tu auto. Todos los derechos reservados. Developer: namor_juani</p>
        </footer>
    );
};

export default Footer;
