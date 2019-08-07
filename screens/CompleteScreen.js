import React, { Component } from 'react';
import { HeaderBackButton } from 'react-navigation';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { TODOS } from '../constants/Utils';
import TodoItem from '../components/TodoItem';
const FOLLOW_COLOR = 'rgb(33, 31, 110)';
export default class TodoScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
        title: 'Complete List',
    });
    constructor(props) {
        super(props);
        this.state = {
            todoList: TODOS,
        };
        this.didFocusSubscription = props.navigation.addListener(
            'didFocus',
            payload => {
                this.setState({
                    todoList: TODOS,
                })
                console.log('ComleteScreen: ', TODOS);
            }
        );

    };
    render() {
        const { inputText, todoList } = this.state;
        return (
            <ImageBackground source={require('../assets/images/galaxy-wallpaper-36.jpg')} style={{ width: '100%', height: '100%' }}>
                <ScrollView
                    contentContainerStyle={styles.container}>
                    <Text style={styles.TitleText}>Complete List</Text>
                    {
                        todoList.map(item => {
                            if (item.status === 'Done') {
                                return (
                                    <TodoItem
                                        key={item.id}
                                        data={item}
                                    />
                                )
                            }
                        })
                    }
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 25,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    TitleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
    }
})