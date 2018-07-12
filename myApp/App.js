import React from 'react';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './assets/components/DetailScreen';
import Gallery from './assets/components/Gallerys';
import HomeScreen from './assets/components/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Gallerys: Gallery,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
