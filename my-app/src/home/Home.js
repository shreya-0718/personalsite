import Greetings from './greetings';
import ProjLink from './projlink';
import Socials from './socials';

function Home() {
    return (        
        <>
            {/* <App /> */}
            <div className="row">
                <Greetings />
                <ProjLink/>
            </div>
            <Socials/>
        </>
    );
} 

export default Home