# Rock, Paper, Scissors, Lizard, Spock Game!

[Please view my live project here!](https://markreddy87.github.io/Rock-Paper-Scissors-Lizard-Spock-Game-Project-2-/)

## 1. Purpose of the Project
This project was both exciting and scary for me at the same time! I was very eager to build my very first web based game and the thought of being able to do this truely excited me. On the other hand the task became quite daunting as it was essential that I had completly grasped the essential basic concepts of the JavaScript language, something which I have struggled with up to now. With that being said, I managed to get the project where I wanted it to be and I am already looking forward to the next one!

I wanted this project to be a fun and easy going gaming experience for any user that came to the page. It consists of a fairly simple game called Rock, Paper, Scissors, Lizard, Spock! It is a slight twist on the original Rock, Paper, Scissors game with two extra parameters. The user makes their choice and play's against the computer in this game of chance and can see how well they are doing from the incrementing wins and losses displayed at the bottom of the page. 

The rules of the game are as follows: Rock crushes Scissors, Rock crushes Lizard, Paper covers Rock, Paper disproves Spock, Scissors cuts Paper, Scissors decapitates Lizard, Spock vaporizes Rock, Spock smashes Scissors, Lizard eats paper and Lizard poisons Spock! 

## 2. User Stories

As a first time user 

As a returning user 

As a visually impared user 

## 3. Features

This project is a single page website and is designed to be a self contained game which the user knows how to play immediatly. 

![Landing page screenshot](assets/images/landing_page.PNG)

Once the page has been loaded the user attention is immediatly draw to the image of spock (leonard Nimoy) in the top left corner. The image will encourage a positive emotional response as Spock is such a recognizable hero from the Star Trek T.V. show and films. The user will then read the text (h1) which tells them what game they are playing. The text below the title challanges them to play against the computer and asks them to make their choice. 

![Heading layout](assets/images/heading_screenshot.PNG)


The buttons are designed with bold eye catching icons and have been styled to match the heading image. 

![Button layout](assets/images/buttons_sceenshot.PNG)


Once a button is clicked the user has made their choice and an alert will appear letting them know what they have chosen.

![Alert 1](assets/images/alert1_screenshot.PNG)

 Once the above alert is closed the program will then choose a random option from an array of choices and another alert will appear telling the user what the computers choice is and if they have won, lost or if there has been a draw. 

 ![Alert 2](assets/images/alert2_screenshot.PNG)



The user's score is updated accordingly at the bottom of the page once the second alert has been closed. 

![Scores screenshot](assets/images/scores_screenshot.PNG)

The game is now ready to play again! What is your high score??

## 4. Future Features

In this project I focused mostly on the JavaScript code and kept the HTML and CSS quite simple. In the future I would like to add a more complex HTML structure as well as more responsive CSS features that would create a better experience for returning users.

## 5. Typography and color scheme

For this project I used mostly primary colors for the button elements to create a positive emotional response from the user as these colors are ones which everyone would immediatly recognise from their cildhood.

For the background I used a dark / navy blue and a contrasting off white / gray color for the text. Doing this I felt that it gave the site some color while maintaing readability of the text for visually impaired users.

The font-family used across the entire page is 'Uchen' which was taken directly from the [Google Fonts](https://fonts.google.com/?query=uchen) website and linked in the head element in the HTML file. It is an upright, block style Tibetan script which I thought looked quite formal and easy on the eye.

## 6. Wireframes

As this project was a fairly simple single page site I did not create any digital wireframes. I hand drew one on paper and was able to map out the area's I wanted to create and used it as a constant visual reference while writing the HTML document and the accompanying CSS file.

## 7. Technology

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/CSS)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


## 8. Testing

   ### 8.1 Code Validation
   
   * HTML - No erros were returned when HTML code was passed through the official [W£C Validator](https://validator.w3.org/#validate_by_input)
   * CSS - No errors were returned when the CSS code was passed the official [Jigsaw Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
   * JavaScript - One warning was returned when the JavaScript code was passed through [JSHint](https://jshint.com/) saying "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics".

   ### 8.2 Fixed Bugs

   One bug that I came across when validating the .html file was that I included alt attributes within the icon elements but this deemed to be unnecessary so they were removed.
   Another bug I found when testing the useability of the game was that when I decalred the choices array outside of the game functions the computer choice would stay the same so to fix this problem I declared the choices array within each game function to ensure the computer choice would always be different when a new game started.

   ### 8.3 Supported Screens and Browsers

## 9. Deployment

   ### 9.1 via gitpod

   This project was initially created in a [Github](https://github.com/) repository and then completly developed in a [Gitpod](https://gitpod.io/) workspace.

   ### 9.2 via github pages

   Once the project was completed is was made live on the web through github pages. The exact steps are listed below:
   * In the GitHub repository for the project find and click the settings tab.
   * Scroll down to the bottom of the page and locate the GitHub Pages section and click the link which says 'Check it out here!'.  
   * On the next page find the source heading and click the dropdown menu. Select main and then apply that setting.
   * The site will now become live.
   * If you wait a few minutes and refresh the page the live deployed link will be present.
   * This link can now be shared with whomever you like!
   
   [Please view my live project here!](https://markreddy87.github.io/Rock-Paper-Scissors-Lizard-Spock-Game-Project-2-/)


## 10. credits

* [Font Awsome](https://fontawesome.com/) - All icons used for the buttons on the page were taken from the Font Awsome website.
* [Google](https://www.google.com/) - The image used in the main heading of the site was taken directly from a google image search.
* [Adobe Color Wheel](https://color.adobe.com/create/color-wheel) - The Adobe Color Wheel site was used for the hex value colors on the page and the rest were taken from the color picker within GitPod
* [Stack Overflow](https://stackoverflow.com/) - This site was used to verify code syntax and layout as well as general queries. 
