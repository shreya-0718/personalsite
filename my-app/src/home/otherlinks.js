import './otherlinks.css'
import {Link} from 'react-router-dom';


function OtherLinks() {
    return (
        <div className="otherlinks-box">
            <div className="otherlinks-header">
                more random things
            </div>

            <div className="actual-links">

                <Link to='/aboutme'> about me </Link>
                <Link to='/projects'> project gallery </Link>
                <Link to='/friendsites'> my friends' websites!</Link>
                <Link to='/contact'> contact me </Link>
                <Link to='/blog'> blog page </Link>
                <Link to='/pictures'> picture wall </Link>
                <Link to='/photobooth'> photo booth </Link>
            </div>
        </div>
    );
}

export default OtherLinks;