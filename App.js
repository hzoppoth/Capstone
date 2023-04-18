import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
//To do: Work on SQL connection for details page. 
//To do: Work on moving the StackNavigator to its own file and importing it into App.js.
//to do: Work on getting the details page to display the data from the database.
//to do: Create some sort of desired page layout.
//to do: Change the app name on the device to BentCreekBuddy.