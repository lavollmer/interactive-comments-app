# Interactive Comments App

This project involved working on an interactive comments application. 

## Table of contents

- [Overview](#overview)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
Frontend Mentor provided local data.json file, so use that to populate the content on the first load. If you want to take it up a notch, feel free to build this as a full-stack CRUD application!

Your users should be able to:

- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- If you're building a purely front-end project, use localStorage to save the current state in the browser that persists when the browser is refreshed
- Build this project as a full-stack application

## Screenshots

<p style="font-size:20px;">Desktop Version:</p>

<p style="font-size:20px;">Desktop Version Dark Mode:</p>

<p style="font-size:20px;">Mobile Version:</p>

<p style="font-size:20px;">Lighthouse Report:</p>

## Links

- Live Site URL: [Personal Portoflio Website Laura Dev](https://lauradev-portfolio.netlify.app/)

## My Process

I began my project by downloading all the necessary assets from the design folder. After this, I installed Vite, ReactJS and TailwindCSS for the project. Finally, I updated the Tailwind config js file with all the design color assets and Google Font "rubik". 

My project involved many different moving pieces; therefore, I thought it was appropriate to review the design to determine how to approach the project. I used my Notepad to write out the various aspects of the project from functionality, buttons, design, and reusable components. Based on these factors, I started my creating a generic comment card which would be reusable for numerous aspects of the project. The comment card included the avatar image, user's name, timing since published, reply button, comment section and a styled increment decrement button. 

After finishing the reusable comment card, I decided to work on the User Comment section to style it. I started with adding an avatar image, a text box and a button. I decided to use a reusable SEND button for the application therefore creating it's own component. 

During this, I decided to work on the increment and decrement counter (i.e. likes for the comment). I used useState to hold the state of the count, then created two functions to increase and decrease the count while console logging the amount for testing purposes.

After this step, I worked on passing the props between each component to display the results. I spent a significant amount of time trying to figure out how to display the reply to specific comments. I found that I was able to get the replies to display; however, they would always be nested in the comment card display. 

## Built with

- [React](https://reactjs.org/) - JS library
- Tailwind CSS
- Google Fonts
- Tailwind CSS Animation
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


## What I learned

Here are several things I learned throughout this project:

1. **_Moment Package_** - In order to get time ago to display for posted comments, I researched and decided to use the ReactJS Moment package. The moment library helps parse, validate and manipulate data. First one must install and import moment into the component.
2. **_Modal Display_** -

## Continued development



## Useful resources

- Family: [Rubik](https://fonts.google.com/specimen/Rubik)
- ReactJS: [Form](https://react.dev/reference/react-dom/components/form)
- ReactJS Count: [ReactJS](https://www.quora.com/How-do-you-increase-and-decrease-number-on-button-click-in-React-Native)
- ReactJS Conver Time: [StackOverflow Timestamp](https://stackoverflow.com/questions/48689876/how-to-convert-timestamp-in-react-js)
- Moment Package: [Moment Package](https://www.npmjs.com/package/react-moment)

## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/lavollmer)
- Github - [@lavollmer](https://github.com/lavollmer)