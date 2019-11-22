import { createAppContainer,} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MyMoviesScreen } from './Main';
import { WatchListScreen } from './WatchList';
import { FriendsScreen } from './Friends';
import { ProfileScreen } from './Profile';

const BottomNavigator = createBottomTabNavigator( // using a bottom nav bar as a starting point
  {
    Home: MyMoviesScreen,
    WatchList: WatchListScreen,
    Friends: FriendsScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(BottomNavigator);
export default AppContainer;

