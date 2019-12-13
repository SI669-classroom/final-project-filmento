import { createStackNavigator } from 'react-navigation-stack'
import { MovieCollectionPage } from "./MovieCollection";
import { MCDetailPage } from './MCDetail';
import { AddToMCPage } from "./AddToMC";
import { AddMovieDetailPage } from "./AddMovieDetail";
import { EditMCPage } from "./EditToMC";


const MCNav = createStackNavigator({
    MC: MovieCollectionPage,
    MCDetail: MCDetailPage,
    AddToMC: AddToMCPage,
    AddMovieDetail: AddMovieDetailPage,
    EditMC: EditMCPage
});
export default MCNav;