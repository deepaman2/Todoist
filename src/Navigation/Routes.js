import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import NavigationString from './NavigationString';
import Login from '../Screens/Login/Login';
import Home from '../Screens/Home/Home';
import SignUp from '../Screens/SignUp/SignUp';
import AddTask from '../Screens/AddTask/AddTask';


function Routes()
{
    const Stack= createNativeStackNavigator();
return(
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationString.HOME} component={Home}/>
        <Stack.Screen name={NavigationString.LOGIN} component={Login}/>
        <Stack.Screen name={NavigationString.SIGNUP} component={SignUp}/>
        <Stack.Screen name={NavigationString.ADDTASK} component={AddTask}/>
    </Stack.Navigator>
</NavigationContainer>
)
}

export default Routes