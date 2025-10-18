import Greetings from './greetings';
import ProjLink from './projlink';
import Socials from './socials';
import OtherLinks from './otherlinks';

function Home() {
    return (
        <>
            {/* <App /> */}
            <div className="row1">
                <Greetings />
                <ProjLink/>
            </div>
            <div className='row2'>
                <Socials/>
                <OtherLinks/>
            </div>
            
        </>
    );
} 

export default Home