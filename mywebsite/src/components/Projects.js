import React from 'react';
import './Projects.css';







class Projects extends React.Component{
    render(){
        return(
            <div className='flex-container'>   
                    <h1 id='main-header'>Mercy Clinic Appointment Center</h1>
                  
                      
                        <div className='image-container'>
                            <img src={require('../images/mercy_home.png')} className='images' />
                            <img src={require('../images/mercy_book.png')} className='images'/>
                            <img src={require('../images/mercy_details.png')} className='images'/>
                        </div>

                        
                           
                        
                        <div id='paragraph'>
                            Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                            Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        </div>
                    </div>
            
        )
    }
}
export default Projects;