import React from 'react';
import ActiveScreen from "../screens/ActiveScreen";
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';

const ActiveStack = createStackNavigator({
    Active: ActiveScreen
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: '400',
                fontSize:20
            },
        },
    }
);

ActiveStack.navigationOptions = {
    tabBarLabel: 'Active',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                'ios-rocket'
            }
        />
    ),


};

export default ActiveStack;