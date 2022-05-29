<h1 align ="center">  Chalchitra :clapper: </h1>

![Backend Python](https://img.shields.io/badge/Backend-Python-brightgreen)
![Backend Python](https://img.shields.io/badge/BackendAPI-Flask-green)
![Backend Python](https://img.shields.io/badge/Frontend-React-yellow)

### Table of Content
- Project Overview
  - [About the project](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#about-the-project)
  - [Salient Features](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#salient-features)
  - [Compatible Platforms](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#compatible-platforms)
- Getting Started
  - [Demo Video](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#demo-video)
  - [Navigating through the app](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#steps-to-run-the-application-on-your-system)
- References
  - [Referred article links](https://github.com/AakankshaJha1/Chalchitra/new/main?readme=1#referred-article-links)

## About the project
<p>Chalchitra is an AI based movie recommendation application in which you can search for any Hollywood Movie. It will provide all the information related to that movie including the cast, rating , movie trailer and does sentiment analysis on the movie reviews .The most integral and interesting part of this application is it will provide you the top 10 movie recommendations based on your search.

ReactJS was used for frontend which was deployed using Vercel hosting and a Flask API was deployed using Docker container on Heroku to serve the machine learning models to the Frontend.

Chalchitra uses Content Based Movie Recommendation to recommend movies to the user.It is using TMDB API to retrieve all the information related to the movie and its cast. Web Scraping is performed on IMDB website to get the reviews related to the searched movie. 

Deployed Web Application Link: https://chalchitra.vercel.app/ <br>
Deployed Flask API Link:https://chalchitraa.herokuapp.com/ 
</p>

## Salient Features

 - Description of the movie
 - Rating
 - Movie Trailer
 - Reviews along with sentiment analysis
 - Category wise movie recommendation
 - Content Based recommendation based on your search

## Compatible Platforms
Desktops, Laptops , Tablets and Phones

## Demo Video
https://user-images.githubusercontent.com/77818602/170858078-92a500b4-c32e-47bf-91b3-50ba02cdba79.mp4

## Steps to run the application on your system
1. Clone or download this repository in your system.
2. Open command prompt in the following folder Frontend/chalchitra.
3. Intsall npm packages using this command:
 ```bash
   npm install
 ```
 4. Since the Flask API is already deployed on Heroku no need to run the Flask API in your local machine to start the React frontend. 
    You can start the react application using the following command:
```bash
  npm start
```
## Navigating through the app

1. Click on the link [Chalchitra](https://chalchitra.vercel.app/)

![Landing Page](https://user-images.githubusercontent.com/77818602/170863366-4cf87ba0-2d66-47f3-8c83-b9b59cb48850.png)

2. Look out for movies under different categories like Horror, Comedy,Documentaries,Action movies and many more.

![categories](https://user-images.githubusercontent.com/77818602/170863482-d20d0e6f-0d0d-4fce-8147-2263d238df2a.png)

3. Type the movie you want to know more about and click on "Search" button

![search](https://user-images.githubusercontent.com/77818602/170863538-f474e158-2bbe-44a7-a1c0-f13b9122401f.png)

4. Watch the trailer and complete overview of that movie.
 
![movie overview](https://user-images.githubusercontent.com/77818602/170863637-06a8d988-7e74-41bb-b22a-6c5bbefb0183.png)

5. Did you like the movie? Give a try to other recommended movies too

![recommendation](https://user-images.githubusercontent.com/77818602/170863660-a940313d-9def-45b9-a274-fcf564c5b4d5.png)


## Referred Article Links
1. [Movie Recommendation System](https://www.analyticsvidhya.com/blog/2020/11/create-your-own-movie-movie-recommendation-system/)
2. [React Tutorial](https://reactjs.org/docs/introducing-jsx.html)
3. [Docker Tutorial](https://www.simplilearn.com/tutorials/docker-tutorial/install-docker-on-windows)

