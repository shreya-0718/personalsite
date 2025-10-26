import './copyright.css'
import githubimage from '../images/github.png'

function Copyright() {
    return (
        <>
            <div className="copyright-wrapper">
                <div className="copyright-text">
                    Copyright © 2025 | All rights reserved.
                </div>
                <a href="https://github.com/shreya-0718/"> 
                    <img className="github" src={githubimage} alt="github" />
                </a>
            </div>
        </>
    );
}

export default Copyright