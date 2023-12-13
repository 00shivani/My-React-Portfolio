// Portfolio.js
import React from 'react';
import Project from '../components/Project';
import './portfolioStyle.css';

const Portfolio = () => {
  // Sample project data
  const projects = [
    { title: 'Discover Skin', image: 'images/skincare_pic.png', description: "Transform your approach to skincare! Move beyond brand names and discover products tailored to your skin's needs. Our website analyzes your skincare quiz responses to recommend ingredients that best suit your skin type. As well as providing a product browsing page and secure login feature for users to save and access their personalized skincare data in one place.", deployedLink: 'https://discover-skin-7a59e0f720d4.herokuapp.com/', githubLink: 'https://github.com/Clarisagonzalez/Discover-Skin' },
    { title: 'Bad Day Be Gone', image: 'images/bad-day.png', description: 'Uplift your mood with a website that uses multiple APIs to pull images of furry friends, various categories of quotes and jokes, and a journal which allows you to log your current feelings and mood.', deployedLink: 'https://00shivani.github.io/bad-day-be-gone/', githubLink: 'https://github.com/00shivani/bad-day-be-gone' },
    { title: 'Crush Calculator', image: 'images/crush-calc.png', description: "If you've ever had a crush on someone, you've definitely wondered how compatible the two of you would be. Well, this fun website has the answers to all your love Qs! This quirky website utilizes APIs to deliver a compatability percentage between the user and their crush. It also utilizes the Urban Dictionary API to provide users with the urban meaning of their crush's name.", deployedLink: 'https://00shivani.github.io/CrushCalculations/', githubLink: 'https://github.com/00shivani/CrushCalculations' },
    { title: 'Password Generator', image: 'images/password-generator.png', description: 'Need a new, secure password? This website allows you to generate one, quicly and easily. It uses browser prompts to allow users to define their own custom criteria, like length and the usage of special characters and numbers', deployedLink: 'https://00shivani.github.io/password_generator/', githubLink: 'https://github.com/00shivani/password_generator' },
    { title: 'CSS Cheat-Sheet', image: 'images/css-snippet.png', description: 'This mini-project showcases advanced CSS concepts. Users are able to view a collection of labeled CSS snippets in a grid format, made responsive to changing screen sizes via the use of flexbox and media queries. Users are able to highlight the code with one simple mouse click.', deployedLink: 'https://00shivani.github.io/css-snippet-cheat-sheet/', githubLink: 'https://github.com/00shivani/css-snippet-cheat-sheet' },
  ];

  return (
    <div >
        <h2 className='heading'>Projects</h2>
    <div className='portfolioContainer'>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
    </div>
  );
};

export default Portfolio;
