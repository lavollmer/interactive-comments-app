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

The next day, I worked on the user comment component. This component is the form submission text box at the bottom of the webpage tied to the end user in which they can provide a comment that appears on the screen. In order to make the user's comment display, I needed to life the state up to the App.jsx and pass a function to the UserComment component to update state and handle submission. Some issues I ran into was where to include the handleSubmit function in the form versus the button as well as prop handling. The handleSubmit button calls the onAddComment prop function in the App.jsx which updates the App component and starts a new render of the page. Additionally, I wanted the form submission to be tied to the end user's name and picture - therefore, I added the user information in the App component and included the user information when adding a new comment. Finally, styling of the new comment had it's own challenges such as being no the full width of the page, the reply button being incorrectly formatted, etc. I played around with this for quite a bit of time to find a scenario in which the formatting was correct.

After working through some formatting issues, I decided to work on the delete button functionality of the end user's specific comments if wanted. To begin, I needed the delete function to only be avilable for the end user, juliusomo, for his posted comments therefore I needed to render the delete button based on the username of the comment. In App.jsx, I passed the current user information to the CommentCard component and conditionally rendered the delete button in the Comment Card component based on the username. One error I worked through involved an error messaged involving the currentUser prop being undefined in the CommentCard component. I determined the currentUser prop was passed correctly from the parent component and added a default props to handle cases where it may be undefined.

The final pieces of the project involved styling it based on the design assets. I started with working on the user comment section as the input box would not stretch the width of the screen. I played around with different CSS styling - checking the App.jsx container, the User Comment component container and then each individual div. I learned that the parent container needed to be set at w-full, while the containers of the avatar image and form needed to set to flex-grow and flex-shrink-0 in order for the form to grow as needed.

I came back to this project after several weeks. The issues that needed to be resolved involved the responsive design and the reply to comment section. I started with understanding the reply button to the comment. It seems that the state management is not working properly as it currently replies to one comment and shows up in another section. The like counter still works correctly. The first thing I worked on was refractoring code - there seemed to be a lot of code that was not being used or unnecessary. Additionally, I used the Google Chrome Dev Tools to determine where the tailwind styling was incorrect for the reply box. It seemed to have an additional div related to the overall box therefore making it smaller on screen. I was able to remove that and as a result the replies box is uniform with the original comments - which was great!

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
3. **_Add New Comment_** - To add a new comment to the webpage, I had to update state within the App.jsx component as well as pass the props function through this. I had originally created a User Comment component which I still used for the form submission; however, the updating and rendering of the page began in the App.jsx.
4. **_Flex Grow and Shrink_** - I learned about the TailwindCSS stylings of flex grow and shrink. Flex-grow sets a container to grow and take upt he remaining space. The flex-shrink is set to not shrink a container and ensures it maintains it's size.

## Continued development

I will continue to work on JavaScript fundamentals, TailwindCSS styling and much more.

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