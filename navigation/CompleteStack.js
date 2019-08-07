import React from 'react';
import CompleteScreen from "../screens/CompleteScreen";
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';

const CompleteStack = createStackNavigator({
    Complete: CompleteScreen,
},
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 20
            },
        },
    }
);

CompleteStack.navigationOptions = {
    tabBarLabel: 'Complete',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? 'ios-done-all' : 'md-done-all'
            }
        />
    ),
};

export default CompleteStack;