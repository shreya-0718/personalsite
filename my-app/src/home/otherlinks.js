import './otherlinks.css'
import {Link} from 'react-router-dom';


function OtherLinks() {
    return (
        <div className="otherlinks-box">
            <div className="otherlinks-header">
                more random things
            </div>

            <div className="actual-links">

                <>
                    <Link to='/aboutme'> about me </Link>
                </>
                
                <>
                    <Link to='/projects'> project gallery </Link>
                </>
                

            </div>
        </div>
    );
}

export default OtherLinks;