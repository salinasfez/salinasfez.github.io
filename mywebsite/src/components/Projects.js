import React from 'react';
import './Projects.css';







class Projects extends React.Component{
 
    render(){

    return(
            <div className='flex-container'>   
                    <h2 id='main-header'>Mercy Health Appointment Center</h2>
                  
                      
                        <div className='image-container'>
                            
                                <img src={require('../images/mercy_home.png')} className='images'/>
                            
                            
                                <img src={require('../images/mercy_book.png')} className='images'/>
                          
                           
                                <img src={require('../images/mercy_details.png')} className='images'/>
                            
                           
                        </div>
                        
                           
                        
                        <div className='projects-paragraph'>
                            I decided to do Mercy Clinic Appointment Center when I was booking my appointment with my doctor whom does not have online booking. I have to call everytime, ask for availability, and the worst part is I have to call during open hours. Through an app like this one, I can book, cancel, or update my appointment at my own convenience. 
                            <br/><br/><a className='project-links' href={'https://mercy-appointment-center.herokuapp.com/appointments'} target='_blank'>Project link...</a>
                        </div>
                    </div>
            
        )
    }
}
export default Projects;