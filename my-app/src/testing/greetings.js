import './greetings.css'
import sparkle_l from './images/sparkles-left.png'
import sparkle_r from './images/sparkles-right.png'

function Greetings() {
return (
    <div className="greeting">
        <img src={sparkle_l} alt="sparkles" class="sparkle sparkle-left" />
        <header className="greetings-header">
            <p>
            Hello! I’m Shreya, a high school senior, and this is my little corner 
            of the internet! Feel free to look around :)
            </p>
        </header>
        <img src={sparkle_r} alt="sparkles" class="sparkle sparkle-right" />
    </div>
  );

}

export default Greetings;
