// AboutMe.js
import React from 'react';
import './aboutStyles.css';

const AboutMe = () => {
  return (
    <div className="container">
    <h2>About Me</h2>
    <div className="content">
      <img src='images/picofMe.jpg' alt="Shivani smiling wearing a leather coat" className="image" />
      <p>Hi! My name is Shivani and I am a student at Rutgers' FullStack Web Development Bootcamp. I'm based in my hometown of South Brunswick, New Jersey. Feel free to browse through a variety of different projects by viewing my portfolio, or by visiting my Github, which is linked in the footer of this page. Thanks for visiting, and have a nice day!</p>
    </div>
  </div>
  );
};

export default AboutMe;
