TV Ratings

An application that allows friends to rate TV shows and share their ratings to each other. Friends can comment and like other ratings to help each other know which shows are worthwhile!

## 🚀 Specification Deliverable

### Elevator pitch

In this day and age a new TV show comes out on the daily. Understandably, we are confused lost and in need of direction when it comes to enjoying shows. The TV Rating application allows you and your friends to rate your favorite TV shows and share them with each other. When you write your rating, you can then post it for your freinds and family to enjoy and take into consideration. At the end of the day, the TV Rating applicaiton will help you as you navigate the crazy world of TV shows! 

### Design

![Design image](https://github.com/graceeputnam/startup/blob/main/Screen%20Shot%202025-09-10%20at%2011.05.06%20PM.png?raw=true)

### Key features

- Secure login over HTTPS
- Ability to create new TV show ratings
- Display of previous ratings 
- Ability to like other's ratings
- Ratings are persistently stored

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses correct HTML structure for the application. There will be two pages, one for login and one that shows old ratings and where you can create new ratings. 
- **CSS** - Styling that uses fun colors that indicate the ratings. 
- **React** - Provides login, rating input display, inputing ratins, display other users ratings, and use of React for routing and components. 
- **Service** - Backend service with endpoints for: login, retrieving old reviews, and submitting new reviews.
- **DB/Login** - Store users, ratings and TV shows in database. Register and login users. Credentials will be securely stored in the database and also old ratings. You can't comment on other ratings unless authenticated. 
- **WebSocket** - As each person rate shows, the ratings are broadcasted to all their friends. 

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://tvrating.click).

## 🚀 HTML deliverable

For this deliverable I built the HTML base for my application.

- [x] **HTML pages** - I made 4 HTML pages with the ability to sign in, rate a TV show, see ratings of others, and find a description of the app.
- [x] **Proper HTML element usage** - I properly used many differnt tags to create my deliverable.
- [x] **Links** - Each page contains links that link to the other 3.
- [x] **Text** - I added description on the about page, an API generated quote mock up and titles to all the features.
- [x] **3rd party API placeholder** - I added a "randomly generated" tv show quote.
- [x] **Images** - I added a TV show photo to the about section.
- [x] **Login placeholder** - I added a place to login and create an account.
- [x] **DB data placeholder** - I have an input box for login which needs to be stored in a database. 
- [x] **WebSocket placeholder** - The ratings section has real time ratings that can be viewed.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** 
- [x] **Navigation elements** - I added styled buttons to take you to each part of my application
- [x] **Responsive to window resizing** - My app works on all window sizes
- [x] **Application elements** - Used good styling and added stars for the rating system
- [x] **Application text content** - I used consistent fonts
- [x] **Application images** - I sized my image and it's border to work on all devices and look proportional

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I did complete this part of the deliverable.
- [x] **Components** - I did complete this part of the deliverable.
- [x] **Router** - I did complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
