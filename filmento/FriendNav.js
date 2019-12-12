import { createStackNavigator } from 'react-navigation-stack'
import { FriendListPage } from './FriendList';
import { FriendCollectionPage } from './FriendCollection';
import { AddFriendPage } from './AddFriend';


const FriendNav = createStackNavigator({
    FriendList: FriendListPage,
    FriendCollection: FriendCollectionPage,
    AddFriend: AddFriendPage,
});
export default FriendNav;