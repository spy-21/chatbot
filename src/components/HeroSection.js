import React from 'react';
import "../App.css";

const HeroSection = () => {
    return (
        <section className="section1">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Content */}
                <div className="text-left">
                    <h1 className="text-5xl font-bold mb-4">
                        Hi, I'm <span className="text-blue-500">[Your Name]</span>
                    </h1>
                    <p className="text-lg mb-6">
                        A passionate <span className="text-blue-300">Full-Stack Developer</span> crafting modern web experiences.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <img
                        src="https://i.pinimg.com/736x/14/b3/04/14b304a872530dc4216fc27c1a115da5.jpg" // Replace with your image path
                        alt="Profile"
                        className="image"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
