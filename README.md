# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3)

## Table of contents

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [https://github.com/Soaphub/Space-project-react/]
- Live Site URL: [https://soaphub.github.io/Space-project-react/#/home]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Learned React router and links.

```js
<Router>
    <div>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/destination">
                <Destination />
            </Route>
            <Route path="/crew">
                <Crew />
            </Route>
            <Route path="/technology">
                <Technology />
            </Route>
        </Switch>
    </div>
   </Router>
```

### Continued development

I have made the dropdown of navbar more animated in mobile view

### Useful resources

- [TheNetNinja](https://www.youtube.com/c/TheNetNinja) - Learned more about React router.

## Author

- Website - [Ambadi](https://soaphub.github.io/Mysite/)
- Frontend Mentor - [@Soaphube](https://www.frontendmentor.io/profile/Soaphub)

## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.

