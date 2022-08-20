#Frontend Mentor - Space tourism website solution

This is a solution to the Space tourism website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

##Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
 
##Overview

##The challenge

I was able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information
 
##Links

- Solution URL: https://github.com/Soaphub/Space-project-react
- Live Site URL: https://soaphub.github.io/Space-project-react

##My process

##Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- Bootsrap Grid
- Mobile-first workflow 
- React.js
 
##What I learned

```html
  <a class="nav-link" href="crew.html">02 &nbsp; CREW</a>
```

```css
  .custom-grid {
    display: flex;
    flex-direction: column-reverse;
  }
```

```.js
const[hamBurger, setCLose] = useState(true);
  const[navEdit, setEdit] = useState(true);

  function togglenav(){
    setCLose((prevalue)=>!prevalue);
    setEdit((prevalue)=>!prevalue);
  }
```

##Continued development

I invoked a click event on explore of home page @ mobile view to show drop down menu.

##Author

Website - Ambadi M P(https://soaphub.github.io/Space-project-react/)

Frontend Mentor - ambadi m p(https://www.frontendmentor.io/profile/Soaphub)

##Acknowledgments

The udemdy course by Angela helped a lot in completing the project.
