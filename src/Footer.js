import React from "react";


const Footer = () => {
    return <footer className='footer' id="lab_social_icon_footer">
            <p>&copy; {new Date().getFullYear()} Copyright by <strong>Natalia Bakakuri</strong></p>
                <div className="text-center center-block">
                    <a href="https://www.linkedin.com/in/nataliabakakuri/" target="_blank" rel="noreferrer"><i id="social-in" className="fa fa-linkedin-square fa-3x social"></i></a>
                    <a href="https://github.com/theonomiMC" target="_blank" rel="noreferrer"><i id="social-git" className="fa fa-github-square fa-3x social"></i></a>
                    <a href="mailto:#teonomi@gmail.com" target="_blank" rel="noreferrer"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                </div>
    </footer>

}

export default Footer