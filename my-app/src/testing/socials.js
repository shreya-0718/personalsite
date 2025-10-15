import './socials.css'

import instagram from "./images/socials/instagram.png"
import github from "./images/socials/github.png"
import linkedin from "./images/socials/linkedin.png"
import slack from "./images/socials/slack.png"

function Socials() {
return (
    <div className="social-box">
        <header className="socials-header">
            <p>
                random links :P
            </p>
        </header>
        <div className="socialinks">
            <a href="https://www.instagram.com/its.shreyaluu/" target="_blank" rel="noreferrer">
                <img src={instagram} alt = "instagram" class="insta"/>
            </a>

            <a href="https://github.com/shreya-0718/" target="_blank" rel="noreferrer">
                <img src={github} alt = "github" class="gith"/>
            </a>

            <a href="https://www.linkedin.com/in/shreya-chougule-8b2458381/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt = "linked in" class="lin"/>
            </a>

            <div className="slackbox">
                <a href="https://hackclub.slack.com/team/U08U68WA0CR" target="_blank" rel="noreferrer">
                    <img src={slack} alt = "slack" class="slack"/>
                    <p> (if ur in the hack club slack) </p>
                </a>
            </div>
            
        </div>
    </div>
  );
}

export default Socials;