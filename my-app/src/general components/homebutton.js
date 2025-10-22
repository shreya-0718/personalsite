import {Link} from 'react-router-dom';
import homebuttonimage from '../images/homebutton.png'

function HomeButton() {
    return (
        
        <>

            <div className="homebutton-wrapper">
                <Link to='/'> 
                    <img className="homebutton" src={homebuttonimage} alt="home button" width="100" />
                </Link>
            </div>

        </>

    );
} 

export default HomeButton