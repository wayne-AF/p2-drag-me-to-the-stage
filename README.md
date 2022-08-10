https://raw.githubusercontent.com/wayne-AF/p2-drag-me-to-the-stage/4aaa6026c249858bc1cb65ae7d12ffcf24746db1/documentation/responsive%20screens.png# Drag me to the stage browser game

## About
The art form of drag has become much more prevalent in the public consciousness in the last decade thanks to shows like RuPaul's Drag Race. Drag is inherently transgressive and political but also often irreverent and silly. I've created a simple game that leans into the sillier side of drag using bright colours, outlandish scenarios, and 27 possible final outfit combinations so that repeat players will see something new each time they play. 


## Table of Contents
1. [User Experience]
	+ [User Stories]
	+ [Design]
	+ [Wireframes]
2. [Features]
	+ [Future features]
3. [Resources]
4. [Testing]
	+ [Validation]
	+ [Functionality]
	+ [Performance]
	+ [Browser compatibility]
	+ [OS compatibility]
	
	+ [Testing user stories]
5. [Deployment]
## User Experience
### User Stories
Due to the simple and straightforward nature of the game, user stories are fairly minimal.

#### User goals:
- To play a simple, colourful drag-themed game.
- To play a browser-based game that I can access easily using a web browser and does not require any typical video game skills or knowledge. 
- To play a game that does not feature any sort of score-keeping. 
- To play a game that I can potentially replay a number of times with different outcomes. 
- To play a game with a simple narrative.
- To play a short game that does not require much attention while I am doing other things. 

### Design
The game layout is uncluttered and simple. It all takes place on the same page, with elements removed and inserted using JavaScript. The bulk of the game is reading through the scenarios and clicking the button to receive an item related to each scenario, and then progressing to the following scenario. I wanted the interface to be as simple as possible.  

#### Colours
I knew that the logo and the art assets would be bright and largely rendered in pinks and purples. I made the background a greenish-blue for contrast, and gave it a gradient for some depth.

The button and logo hover effects are rendered in yellow, which contrasts pleasantly with the purple and pink text. All are bright, cheerful colours in to match the cheerful upbeat tone of the game.

#### Layout
On larger screens, the character images appear to either side of the main text. On smaller screens, they appear above the text. 

#### Fonts
For the main logo, I chose Fascinate from Google Fonts, a round and playful display text. 

For the h2, I chose Rock Salt from Google Fonts, a cursive text with a handwritten, almost frantic quality, alluding to the frantic content of the game's scenarios (i.e. rushing around to put together a drag outfit in time for the show).

For the main body text, I used Raleway from Google Fonts, a clean and readable font which also has a sense of roundness to it. Since it can sometimes contain multiple lines of text, I decided to stick with this text even though it is a little plain because it is easy to read. 
 
#### Imagery
All images used in the project were created by me. 

I designed the characters in a playful, cartoonish style, and used bright colours that would pop against the background. In this version of the project, there are 27 possible outfits the player can achieve, from a combination of three types each of wigs, outfits, and shoes. My original idea was to include three types of make-up and padding (which are still items the player can achieve in the game and which still contribute to the final score). However, this would have raised the potential number of possible outfits to 243, which is far beyond the scope of this project. 




#### Wireframes



## Future Features
 


## Resources
- [Am I Responsive](https://ui.dev/amiresponsive) - Used to test responsiveness across different-sized viewports
- [Balsamiq](balsamiq.cloud) - Used for wireframe creation
- [CSS Gradient](https://cssgradient.io/) - Used for creating the background image
- [Google fonts](https://fonts.google.com/) - Used to choose and import fonts
- [Infinite Painter](https://www.infinitestudio.art/discover.php) - Used for asset creation
- [JS Hint](https://jshint.com/) - Used to validate JavaScript
- [Pic Resize](https://picresize.com/) - Used for image resizing
- [StackEdit](https://stackedit.io/) - Used for markdown editing
- [W3C](https://validator.w3.org/) - Used for code validation  

## Testing
### Validation
- HTML validation 
	+ I used W3C for HTML validation. It threw up a warning concerning having a h2 inside a form label. I amended this by giving the label a CSS class in order to style it as required. 
- CSS validation
	+ I used W3C for CSS validation. The only warning I received was regarding Google Fonts.
- JS validation
	+ I used JS Hint for JavaScript validation. Discounting ES6 version and missing semicolon, no issues were detected.

### Functionality

### Performance
Chrome developer tools Lighthouse performance results:
- index.html performance result:

### Browser compatibility
(Tested using MacOS Monterey Version 12.4)
- Chrome Version 103.0.5060.53: Website performed as expected. 
- Firefox Version 101.0.1: Website performed as expected. 
- Safari Version 15.5 (17613.2.7.1.8): Website performed as expected. 
### OS compatibility
- Android 11 Oxygen 11.1.2.2 (Chrome 102.0.5005.125 & Firefox 101.2.0): Website performed as expected. 
- iPhone13 iOS 15.4.1 (Safari version 15.4): Website performed as expected. 

### Issues
### Testing user stories
- _I am a user who_ 
	+ Answer. 
	+ Answer. 
	__Test result: SUCCESS__
- _I am a user who ._
	+ Answer
	__Test result: SUCCESS__
- _I am a user who_
	+ Answer. 
	__Test result: SUCCESS__
- _I am a user who._
	+ Answer
	__Test result: SUCCESS__
- _I am a user who..._
	+ Answer
	__Test result: SUCCESS__
## Deployment
To clone the website's repository to your local computer in order to edit code, add or remove files, and push larger commits, the following steps should be taken:
1. Log into GitHub.
2. Use the search facility or the _Recent Repositories_ list on the left of the screen to locate and select wayne-AF/p2-drag-me-to-the-stage.
3. From the tabs below the menu list and above the file list, click _Code_.
4. There are three methods of creating a clone:
	+ Clone the repository using HTTPS
	+ Clone the repository using an SSH key
	+ Clone the repository using GitHub CLI.
Choose the method and click the button to copy the link. 
5. Open the terminal.
6. Change the current working directory to the desired location for the cloned directory. 
7. Type __git clone__, paste the copied URL, and press _enter_ to create the local clone. 

To edit the website's code and push it to the repository, the following steps should be taken:
1. Log into GitHub.
2. Use the search facility or the _Recent Repositories_ list on the left of the screen, to locate and select wayne-AF/p2-drag-me-to-the-stage. 
3. From the tabs below the menu list and above the file list, click _Gitpod_.
4. Sign into Gitpod if required. 
5.  Make any desired changes to the code. 
6. In the command line of the terminal, type __git add .__ and hit _enter_.
7. On the next line, type __git commit -m "_enter your commit comment here_"__ and hit _enter_.
8. On the next line, type __git push__ and hit _enter_.
9. Your changes have been pushed to the repository and saved to the project.

To deploy the website from its GitHub repository, the following steps should be taken: 
1. Log into GitHub.
2. Use the search facility or the _Recent Repositories_ list on the left of the screen, to locate and select wayne-AF/p2-drag-me-to-the-stage. 
3. From the menu list below the repository name, select _Settings_.
4. Select _Pages_ from the menu on the left. 
5. Under _Source_, click the drop-down menu labelled _None_ and select _Master Branch_.
6. The page will be refreshed and the website will be deployed with a link provided in the _GitHub Pages_ section. 

## Acknowledgements

