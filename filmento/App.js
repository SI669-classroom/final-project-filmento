import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginPage } from "./Login";
import { SignUpPage } from "./SignUp";
import { MovieCollectionPage } from "./MovieCollection";
import { AddToMCPage } from "./AddToMC";
import { EditMCPage } from "./EditToMC";
import { MCDetailPage } from "./MCDetail";
//import { WatchListPage } from './WatchList';
//import { AddToWLPage } from './AddToWL';
//import { WLDetailPage } from './WLDetail';
//import { FriendListPage } from './FriendList';

const AuthStack = createStackNavigator({
  Login: LoginPage,
  SignUp: SignUpPage
});
const AppStack = createStackNavigator({
  MovieCollection: MovieCollectionPage,
  AddMovieToCollection: AddToMCPage,
  MovieCollectionDetail: MCDetailPage,
  //WatchList: WatchListPage,
  //AddMovietoWatchList: AddToWLPage,
  //WatchListDetail: WLDetailPage,
  //FriendList: FriendListPage,
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
    //EditMovieCollection: EditMCPage,
    //MovieCollectionDetail: MCDetailPage
    //WatchList: WatchListPage,
    //AddMovietoWatchList: AddToWLPage,
    //WatchListDetail: WLDetailPage,
    //FriendList: FriendListPage,
  },
  {
    initialRouteName: "App"
  }
);

const AppContainer = createAppContainer(App);

export default AppContainer;

//test2@gmail.com
