import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginPage } from "./Login";
import { SignUpPage } from "./SignUp";
import { MovieCollectionPage } from "./MovieCollection";
import { MCDetailPage } from './MCDetail';
import { AddToMCPage } from "./AddToMC";
import { AddMovieDetailPage } from "./AddMovieDetail";
import { EditMCPage } from "./EditToMC";
import { FriendListPage } from './FriendList';
import { FriendCollectionPage } from './FriendCollection';
import { AddFriendPage } from './AddFriend';
import { FriendMovieDetailPage } from './FriendMovieDetail';

const AuthStack = createStackNavigator({
  Login: LoginPage,
  SignUp: SignUpPage
});
const AppStack = createStackNavigator({
  MovieCollection: MovieCollectionPage,
  AddMovieToCollection: AddToMCPage,
  AddMovieDetail: AddMovieDetailPage,
  MovieCollectionDetail: MCDetailPage, 
  EditMovieCollection: EditMCPage,
  FriendList: FriendListPage,
  FriendCollection: FriendCollectionPage,
  AddFriend: AddFriendPage,
  FriendMovieDetail: FriendMovieDetailPage,
}
);

const App = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
    // Login: LoginPage,
    // SignUp: SignUpPage,
    //MovieCollection: MovieCollectionPage,
    //AddMovieToCollection: AddToMCPage,
    //MovieCollectionDetail: MCDetailPage,
    //WatchList: WatchListPage,
    //FriendList: FriendListPage,
    //EditMovieCollection: EditMCPage,
    //MovieCollectionDetail: MCDetailPage
    //WatchList: WatchListPage,
    //AddMovietoWatchList: AddToWLPage,
    //WatchListDetail: WLDetailPage,
  },
  {
    initialRouteName: "Auth"
  }
);

const AppContainer = createAppContainer(App);

export default AppContainer;

//test2@gmail.com
