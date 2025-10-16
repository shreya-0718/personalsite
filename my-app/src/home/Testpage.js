import ProjLink from './projlink';
import {Link} from 'react-router-dom';

function Testpage() {
    return (        
        <>
            {/* <App /> */}
            <div className="row">
                <ProjLink/>
                <Link to='/'> hello this is me </Link>
                {/* this is how you link stuff */}
            </div>
        </>
    );
} 

export default Testpage