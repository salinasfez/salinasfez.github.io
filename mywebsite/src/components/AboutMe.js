import React from 'react';
import './AboutMe.css';
class AboutMe extends React.Component{
    
    render(){
        return(
            <div className='flex-container'>
                <div id='paragraph' className='flex-item'>
                Software developer committed to creating the most efficient solutions to routine methods in order to save companies money and provide users with a seamless experience. I focus on leading by example and keeping my team moving forward. In the workplace, I believe that by supporting and elevating my coworkers, we all find greater success. Honesty, hard work, and gratitude are my lifestyle. 
                </div>
                <div className='flex-item' id='technologies'>
                    HTML 5 | MongoDB | jQuery | Javascript | React | Express | CSS3 | Bootstrap
                </div>
                <div className='flex-item'>
                {/* <img src={require('/images/image-name.png')} /> */}
                <img src={require('../images/profilepic.jpg')} alt={'federico'} className='federico' />
                </div>
            </div>
        )
    }
}
export default AboutMe;

