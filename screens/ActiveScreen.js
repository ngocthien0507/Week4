import React, { Component } from 'react';
import { HeaderBackButton } from 'react-navigation';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';
import { db } from '../constants/db';
import TodoItem from '../components/TodoItem';

let itemsRef = db.ref('/TodoList');

export default class ActiveScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
        title: 'Active List',
    });
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };
        this.didFocusSubscription = props.navigation.addListener(
            'willFocus',
            payload => {
                itemsRef.on('value', (snapshot) => {
                    let data = snapshot.val();
                    let todoList = Object.values(data);
                    this.setState({ todoList });
                });
            }
        );
    };
    componentWillMount() {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let todoList = Object.values(data);
            this.setState({ todoList });
        });
    }
    render() {
        const { inputText, todoList } = this.state;
        return (
            <ImageBackground source={require('../assets/images/galaxy-wallpaper-36.jpg')} style={{ width: '100%', height: '100%' }}>
                <ScrollView
                    contentContainerStyle={styles.container}>
                    <Text style={styles.TitleText}>Active List</Text>
                    {
                        todoList.map(item => {
                            if (item.status === 'Active') {
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