import {Link} from 'react-router-dom';
import homebuttonimage from '../images/homebutton.png'

function HomeButton() {
    return (
        
        <>

            <Link to='/'> 
                <img src={homebuttonimage} alt="home button" width="100"/>
    
            </Link>

        </>

    );
} 

export default HomeButton