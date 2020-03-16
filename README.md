
# Filmento

Filmento is a mobile app that helps you keep track of the movies you’ve watched, the ones you want to watch, your personal thoughts and even the ones you watched it with. 

![](https://i.imgur.com/orrlqMm.jpg)


## Overview
Filmento helps users to keep track of the movies they have seen and also allows them to keep additional personal notes to the movies. The target users would be people who are into movies, enjoying ruminating on movie plots or meanings behind the scenes, and wanting to document their thoughts or emotions after watching a movie. Filmento also helps users to build a watching list and allows users to tag your friend you watched the movie with. 

We used **React Native** and **Expo** to build the frontend of this app starting from the basic CRUD structure. We added additional features such as real-time searching and displaying results, filtering the movie using tags, and even selecting the favorable poster for the movie you just watched. We used **Firebase** to construct the backend of the app, including setting up user’s personal accounts to log into the app. 

For our next step, besides completing all the features, we would like to explore for external API, such as OMDB API, to avoid storing movie information in our own storage-limited database and facilitate real-time updating of new movies, information and poster images. 


## Feature

**Sign In (Implemented)**
As a personal movie collection app, users will need to sign in/sign up to the app so that they can see their own information.

**Search and Add movies to personal collection (Implemented)** 
Users are able to add movies to their personal collection. On the “Add Movie” page, users can add movies by typing their names in the search bar. The app will populate related results. In  addition to recording movies’ basic information, users can write down their own reviews or notes, saving their thoughts about the movies.

**Emoji category (Implemented)**
Different from traditional labels and categories, the app ask users how they feel after watching a movie. Users can choose corresponding emoji. By doing so, users can see their moods through visual elements. In the future, when they want to watch movies in specific contexts, they can find corresponding movies through the emoji categories.


**Tag friends(movie would be added to the friend's collection if he/she accepts) (Not implemented)**

Users can tag friends they watched a movie with in a movie entity. The friend being tagged will see the movie they are tagged in show up in their collection, but grayed-out. Once they confirm that they wish to be tagged, the movie will be officially added to their collection.

**Search/Add new friend (Partially implemented)**
Users can search for other accounts by username or name and send friend requests to them.

**View friend’s collection (Implemented)**
If an account is registered as a friend, users can view the personal collection of that account, including the movie categories created by the account user.

**Watch List (Not implemented)**
Users will be able to add movies that they have not yet watched but wish to watch to a wish list. When users tap on a movie in their wish list, the app will display basic information for that movie. It will also display the theater with the movie available that is nearest to the user’s current location and online platforms that provide this movie. Users can click on a button to move a movie from the Wish List to their Collection after they have watched it.

**Filtering/Sorting (Not implemented)**
Within a user’s movie collection, he/she will be able to filter the content (e.g. using self-created categories, emoji categories) and also sort them (e.g. alphabetically, by timestamp). 

**Watch count (Not implemented)**
For movie lovers, they may want to know how many times they watch the same movie. The app helps users count it. Users can add times through clicking on the Watch Count area.

**Movie Poster view selection in own collection (Implemented)**
When users are on “Add Movie” page and find the movie they want to record, they will be provided different versions of movie posters. By doing so, users can choose their favorite poster and have it on their collection page.

**Automatically play movie soundtrack when viewing a movie in collection (Not implemented)**
When users tap on a movie within their collection and arrive at the movie information page, the app will automatically start playing soundtracks from that movie, providing a more immersive experience.

**Add favorite quote from movie (Not implemented)**
If users like the lines in the movie and feel resonate with the lines, they can also record their favorite line on the “Add Movie” page.




## Team Members:
Ting-Wei Chang, Charlene Ni, Benjamin Yu
