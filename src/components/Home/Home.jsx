
import AboutMeAll from '../HomeComponent/AboutMe/AboutMeAll/AboutMeAll';
import FrontPage from '../HomeComponent/FrontPage/FrontPage';


const Home = () => {
    return (
        <div className='max-w-7xl m-auto'>
             <FrontPage></FrontPage>
             <AboutMeAll></AboutMeAll>
        </div>
    );
};

export default Home;