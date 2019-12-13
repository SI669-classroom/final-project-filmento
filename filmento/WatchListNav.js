import { createStackNavigator } from 'react-navigation-stack'
import { WatchListPage } from './WatchList';
import {AddToMCPage} from './AddToMC';


const WatchListNav = createStackNavigator({
    WatchList: WatchListPage,
    AddToMC: AddToMCPage
});
export default WatchListNav;