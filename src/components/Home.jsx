import './Home.css';
import play from '../assets/play-icon.png'; // Adjust the path as necessary
import CategoryServices from './CategoryServices';
import DestinationCategory from './DestinationCategory';

const Home = () => {
    return(
        <div className="main-container">
            <p className='heading-text'>BEST DESTINATIONS AROUND THE WORLD</p>
             <p className='subheading-text'>Travel, enjoy and live a new and full life</p>  
             <p className='description-text'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>


                <div className='button-container'>  
             <div className='find-out-more-container'>
                <p className='find-out-more-text'>Find out more</p>
             </div>
             <div className='playdemo-button'> 
                <img src={play} alt='playbutton' className='play-icon'/>
                <div className='playdemo-text'>
                    <p className='playdemo-text-line'>Play Demo</p>
                </div>
             </div>
                
             </div>


            
             <div className='category-services'>
                <div className='category-service-box1'>
                   <p className='category-service-box-text'>Calculated Weather</p>
                   <p className='category-service-box-description'>Built Wicket longer admire do barton vanity itself do in it.</p>

                </div>

                <div className='category-service-box2'>
                   <p className='category-service-box-text'>Best Flights</p>
                   <p className='category-service-box-description'>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>

                 <div className='category-service-box3'>
                   <p className='category-service-box-text'>Local Events</p>
                   <p className='category-service-box-description'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>

                <div className='category-service-box4'>
                   <p className='category-service-box-text'>Customization</p>
                   <p className='category-service-box-description'>We deliver outsourcedaviation services for military customers</p>
                </div>
                
            </div>


               <DestinationCategory />

            
             
            {/* <div className='heading-container'>
                <div className='subheading-container'>
                <div className='description-container'>
            </div>
           </div>
            </div> */}

           
        </div>
    )
}

export default Home;