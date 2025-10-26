import './copyright.css'
import githubimage from '../images/github.png'

function Copyright() {
    return (
        <>
            <div className="copyright-wrapper">
                <div className="copyright-text">
                   This website is open source!
                </div>
                <a href="https://github.com/shreya-0718/personalsite"> 
                    <img className="github" src={githubimage} alt="github" />
                </a>
            </div>
        </>
    );
}

export default Copyright