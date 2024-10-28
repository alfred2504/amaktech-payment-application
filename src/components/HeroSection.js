import React from 'react';
import computer from '../assets/images/computer.jpg';
import greenICT from '../assets/images/green-ict.jpg';
import image from '../assets/images/image.jpg';
import '../assets/styles.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to AmakTech Solutions</h1>
                <p>Your journey begins here. Discover our services and get started today!</p>
                <a href="signup" className="btn">Get Started</a>
            </div>

            {/* Container for vertical images*/}
            <div className="vertical-images">
                <image src={computer} alt="Computer technology" />
                <image src={greenICT} alt="Green ICT" initiative />
                <image src={image} alt="Abstract design" />
            </div>
        </section>
    )
}

export default HeroSection