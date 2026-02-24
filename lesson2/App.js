import {reactAppContainer} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./screens/MainScreen";
import TestScreen from './screens/TestScreen';
import ExerciseScreen from './screen/excersise';
import MenuScreen from './screens/MenuScreen';
import BoxScreen from './screens/BoxScreen'




const navigator = createStackNavigator(
  {
    Main: MainScreen,
    Test: TestScreen,
    Exercise: ExerciseScreen,
    MenuScreen: Menu,
    Students: StudentsScreen,
    Profile: ProfileScreen,
    Box: BoxScreen
    
  }
)
