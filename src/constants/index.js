import {
  linkedin, github, linkedin1, github1, tvshowbox, guesstheword, tictactoe, mathmagician, metricwebapp, spacetravelers, recipeapp, trackbudget, carrental, guesstheword1, guesstheword2, guesstheword3, spacetravelers1, spacetravelers2, spacetravelers3, tictactoe1, tictactoe2, tictactoe3, tvshow1, tvshow2, tvshow3, metricswebapp1, metricswebapp2, recipeapp3, recipeapp4, recipeapp6, trackbuget1, trackbuget2, trackbuget5, carrental1, carrental2, carrental3, responsive, react, fullstack,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jeremy-hatchel-a6972534b',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com/pretty128guydev',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: '.NET',
    icon: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-official.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C++',
    icon: 'https://www.vectorlogo.zone/logos/isocpp/isocpp-ar21.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Java',
    icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000',
  },
  {
    stack: ['languages', 'all'],
    name: 'NEXT JS',
    icon: 'https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Vue JS',
    icon: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Ruby on Rails',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'RSpec',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Docker',
    icon: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Car Rental App',
    desc: 'The Car Rental App is a comprehensive full-stack application where you can seamlessly explore an array of cars, search by name, delve into comprehensive car details, make reservations when logged in, manage reservations, add or delete cars in the database, and personalize your profile with ease.',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    img: carrental,
    carousel: [carrental1, carrental2, carrental3],
    live_link: 'https://car-rental121.netlify.app/',
  },
  {
    id: 2,
    name: 'Recipe App',
    desc: 'The Recipe app keeps track of all your foods, recipes, and ingredients. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Since sharing recipes is an important part, it allows you to make them public so anyone can access them.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: recipeapp,
    carousel: [recipeapp3, recipeapp4, recipeapp6],
    live_link: 'https://recipe-app121-b8888e20687b.herokuapp.com/',
  },
  {
    id: 3,
    name: 'TV Shows Box',
    desc: 'TVshows Box is a web application showing multiple TV shows with the help of TVmaze API which contains both mobile and desktop versions. The webapp have 3 interfaces: - A home page, a popup window, and a contact page.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'TVmaze API'],
    img: tvshowbox,
    carousel: [tvshow1, tvshow2, tvshow3],
    live_link: 'https://tvshowbox.netlify.app/',
  },
  {
    id: 4,
    name: 'Metrics Webapp',
    desc: 'Metrics Webapp is a mobile web application showing the current weather data of the cities using the Openweather API. It has two interfaces - city page and detail page based on the design of Nelson Sakwa on Behance. Built during the Microverse Module 3 React Captone Project.',
    tech: ['React', 'Redux', 'Openweather API'],
    img: metricwebapp,
    carousel: [metricswebapp1, metricswebapp2],
    live_link: 'https://metrics-webapp121.netlify.app/',
  },
  {
    id: 5,
    name: 'Track Budget App',
    desc: 'Track Budget is a mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what category.',
    tech: ['Ruby', 'Ruby on Rails', 'PostgreSQL'],
    img: trackbudget,
    carousel: [trackbuget1, trackbuget2, trackbuget5],
    live_link: 'https://track-budget121-70a570d4e3e1.herokuapp.com/',
  },
  {
    id: 6,
    name: 'Math Magicians',
    desc: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
    tech: ['React'],
    img: mathmagician,
    carousel: [mathmagician],
    live_link: 'https://math-magicians121.netlify.app/',
  },
  {
    id: 7,
    name: 'Tic Tac Toe',
    desc: 'Tic Tac Toe is a simple and classic game that is played on a 3x3 grid. The game is typically played with two players, one using “X” and the other using “O”. Mainly built with JavaScript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: tictactoe,
    carousel: [tictactoe1, tictactoe2, tictactoe3],
    live_link: 'https://tic-tac-toe121.netlify.app/',
  },
  {
    id: 8,
    name: "Space Travelers' Hub",
    desc: "Space Travelers' Hub is a web application that provides commercial and scientific space travel services using the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
    tech: ['React', 'Redux', 'SpaceX API'],
    img: spacetravelers,
    carousel: [spacetravelers1, spacetravelers2, spacetravelers3],
    live_link: 'https://space-travelers-hub121.netlify.app/',
  },
  {
    id: 9,
    name: 'Guess the word',
    desc: 'Guess The Word is a fun letter puzzle game where the player have to guess the hidden word using the clues that the game gives. The game ends if the player guesses the correct word or if he chooses the wrong letter 8 times. Mainly built with Javascript.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    img: guesstheword,
    carousel: [guesstheword1, guesstheword2, guesstheword3],
    live_link: 'https://guess-the-word121.netlify.app/',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Rene Puig Rojas',
    image: '/src/assets/Rene.jpg',
    text: 'Jeremy is an exceptional developer—quick, reliable, and delivers clean, scalable code every time.',
    country: 'US',
  },
  {
    id: 2,
    name: 'Edosa Odaro',
    image: '/src/assets/edosaOdaro.jpg',
    text: 'Working with Jeremy was a breeze. He understood our needs right away and exceeded expectations.',
    country: 'United Kingdom',
  },
  {
    id: 3,
    name: 'Nathan Nelson',
    image: '/src/assets/nathan.png',
    text: 'Jeremy brought expert-level skills and clear communication to the table. Highly recommended!',
    country: 'US',
  },
  {
    id: 4,
    name: 'Alec Drury-Singh',
    image: '/src/assets/alec.png',
    text: 'What impressed us most was Jeremy’s ability to solve complex problems efficiently and elegantly.',
    country: 'Canada',
  },
  {
    id: 5,
    name: 'Stacey-Leigh Miller',
    image: '/src/assets/stacy.png',
    text: 'He’s professional, detail-oriented, and always hits deadlines. We’ll definitely work with him again.',
    country: 'US',
  },
  {
    id: 6,
    name: 'Marko Kermichiev',
    image: 'https://avatars.githubusercontent.com/u/112749658?v=4',
    text: 'Jeremy transformed our idea into a high-performing application. Truly a top-tier developer.',
    country: 'US',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: fullstack,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export {
  technologies, projects, testimonials, social, services, navLinks,
};
