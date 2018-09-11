# Dinner Diary
A React.js app for rating daily meals. Keep track of your dinners and remember which meals you liked best. 

## Built With
* React.js
* Redux
* React-Redux
* React Routing 
* Node.js
* Express
* Material UI
* PostgreSQL
* Moment.js


## Getting Started
### Setup

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

## Screen Shots
![ScreenShot of Dinner Diary](https://github.com/larsz-o/redux-feedback-loop/blob/master/public/images/dinner.png)
![ScreenShot of Dinner Diary](https://github.com/larsz-o/redux-feedback-loop/blob/master/public/images/taste.png)

## Completed Features
- [x] Dinner Diary collects user's ratings (on a scale from 0-10) on taste, texture, creativity, and nutrition of each meal and allows users to submit comments. 
- [x] Ratings are stored in a Redux Store until a user has completed an entire review. After the review is submitted, the data is stored in a PostgreSQL database. 
- [x] Users can view their history of ratings (overall rating and comments) in the Ratings Log.
- [x] Users can sort the Results Log table by rating , date, user name, and meal name.
- [x] The Ratings Logs also allows users to delete or flag entries for review. 
- [x] When an entry is flagged for review, the entire row turns a red color. 

## Next Steps
- [ ] Allow users to upload or link to recipes.
- [ ] Allow for multiple users to login and compare ratings against others in their household. 

## Author
@larsz-o