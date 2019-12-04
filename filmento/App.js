import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import { LoginPage } from "./Login";
// import { SignUpPage } from "./SignUp";
import { MovieCollectionPage } from "./MovieCollection";
//import { AddToMCPage } from './AddToMC';
import { MCDetailPage } from './MCDetail';
import { WatchListPage } from './WatchList';
//import { AddToWLPage } from './AddToWL';
//import { WLDetailPage } from './WLDetail';
import { FriendListPage } from './FriendList';

const AppNavigator = createStackNavigator(
  {
    // Login: LoginPage,
    // SignUp: SignUpPage,
    MovieCollection: MovieCollectionPage,
    //AddMovieToCollection: AddToMCPage,
    MovieCollectionDetail: MCDetailPage,
    WatchList: WatchListPage,
    //AddMovietoWatchList: AddToWLPage,
    //WatchListDetail: WLDetailPage,
    FriendList: FriendListPage,
  },
  {
    initialRouteName: "MovieCollection"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
