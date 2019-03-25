# Challenge Yourself 
## Creative Thinking Game

This Project is a interactive Front End Website, to play a dynamic thinking game. 
Each time the user clicks the "Generate Challenge" button, they are presented with 
mental models and problems, and prompted to write down the thoughts they come up 
with in response to the challenge. The user can then email themselves their responses.

### UX

The website is a intellectual exercise / game, and is for someone keen to practice their creative thinking 
and problem solving. It is also suitable for someone who wants to understand how mental models can be used
to think about a problem in a focused, productive way.

#### User Stories:
- I want to practice using mental models as a problem solving method, in order to use that skill in my work.
- I want to have an intellectual challenge, as a source of entertainment.
- I want to use different mental models to think about a specific problem I want to solve.

#### Wireframes: 

My Wireframes for this project are included as images in the /wireframes directory.

### Features

 - User can select the number of mental models or problems they would like to include.

- The user can add their own text for the problem to be used.

- The user can email their responses to themselves, as a method of keeping what they have come up with.

### Future Feature Ideas
- User being able to add multiple problems, and also add to the mental models.
- Timer function for added challenge
- Multiplayer option

### Technologies Used

- [html](https://developer.mozilla.org/en-US/docs/Web/HTML), css, javascript
    - These were used for the basic layout, styling, and functioning of the website.

- [jQuery](https://jquery.com/)
    - jQuery used for manipulating DOM eg. adding / changing elements and their contents.

- [Bootstrap](https://getbootstrap.com/)
    - Bootstrap used for the layout of the site, and the card reveal function for adding problems.

- [emailjs](http://www.emailjs.com/)
    - emailJS used for sending the user the email with their challenge, without needing to add a backend.

- [Font Awesome](https://fontawesome.com/)
    - fontawesome used for icons

- [Coloors](https://coolors.co/)
    - Coloors used for the colour scheme.



### Testing

- [HTML Validator](https://jigsaw.w3.org/css-validator/validator)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JS Hint](https://jshint.com/)
- [Responsinator](https://www.responsinator.com/)
- I used the HTML Validator, CSS Validator, and JS Lint to check my HTML, CSS, and 
JS files. I used the Responsinator to check the responsiveness of my page.

- I tested the emailjs functionality with the different situations someone could
be sending the email to check it works correctly.

### Bug
- One bug I noticed but haven't fixed is, when someone sends an email to themselves
without having clicked the "Generate Challenge" button, or entered any responses
into the textarea, no email is sent.

### Deployment

The Website is deployed using GitHub Pages - https://rachel-white.github.io/Challenge-Yourself/ .

### Credits
- Content: Mental Models mostly written based on information from [Farnam Street](https://fs.blog/).
- Made with a lot of help from the Code Institute Mentors! Thank you Nick, Michael, Haley, and Nakita. 
- Thank you to Adam Gibbons for help on Slack. 