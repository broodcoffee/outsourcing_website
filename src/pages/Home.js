import React from 'react'
import DevBox from '../components/DevBox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';


const Home = () => {
    return (
        <>
            <div id='main'>
                <div className='header-heading' id="heading">
                    <h3>Hello, Welcome to Code Sourcing its nice to be you here!</h3><br />
                    <h1><span>CODE</span> FOR<br /> WEEK</h1><br /><br />
                        <a href='#section' className='header-btn'>Dev</a>
                </div>
            </div>
            <div id='products'>
                <h1>CHOOSE YOUR DEV.</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur</p>
                    <div className='a-container'>
                        <DevBox image={pimage1} title="Full-Stack Developer" />
                        <DevBox image={pimage2} title="Front-End Developer" />
                        <DevBox image={pimage3} title="Back-End Developer" />  
                    </div>;
            </div>            
        </>
    )
}

export default Home;
