import React from 'react';
import TodoScreen from "../screens/TodoScreen";
import { createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import { Platform } from 'react-native';
import TodoDetailScreen from '../screens/TodoDetailScreen';

const TodoStack = createStackNavigator({
    Todo: TodoScreen,
    TodoDetail: TodoDetailScreen
}, {
        headerMode: 'none',
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

TodoStack.navigationOptions = {
    tabBarLabel: 'All Todo',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-add-circle${focused ? '' : '-outline'}`
                    : 'md-add-circle'
            }
        />
    ),
};

export default TodoStack;