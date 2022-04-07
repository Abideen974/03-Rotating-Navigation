import React,{useState} from 'react'
import image1 from './picture/a.jpg';
import './rotat.css'


function RotationNav() {

    const [state,setState] = useState(false);

    const handleChange = () =>{
      setState(!state);
    }
    
    
    
      return (
        <>
            <div className={`container ${state ? "show-nav" : ''}`}>
                <div className="circle-container">
                    <div className="circle">
                        <button id="close" onClick={handleChange}>
                            <i className='fas fa-times'></i>
                        </button>
                        <button id="open" onClick={handleChange}>
                            <i className='fas fa-bars'></i>
                        </button>
                    </div>
                </div>
                
                <div className="content">
                    <h1>Amazing Artical</h1>
                    <small>Florin Pop</small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore cupiditate quam.
                         Pariatur doloribus distinctio tempora quod nisi explicabo nobis iusto? In,
                         odit eos optio iusto dolorem maxime, voluptatem ipsum magni aliquam iste veritatis et. Exercitationem animi reiciendis deleniti sunt!</p>
                    <h3>Colours of Nature</h3>
                    <img src={image1} alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, atque corrupti commodi tempore eum quam nemo iste error! Sapiente libero ad exercitationem perspiciatis omnis animi corrupti atque voluptas, veritatis a.</p>
                </div>
            </div>
            <nav>
              <ul>
              <li> <i className='fas fa-home'></i>Home</li> 
              <li>  <i className='fas fa-user-alt'></i>About</li> 
              <li>  <i className='fas fa-envelope'></i>Contact</li> 
              </ul>
            </nav>
        </>
      )
    }

export default RotationNav