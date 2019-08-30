import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import TodoItem from '../components/TodoItem';
import { Additem, RemoveItem } from '../services/ItemServices';
import { db } from '../constants/db';
const FOLLOW_COLOR = 'rgb(33, 31, 110)';

const { width, height } = Dimensions.get('window');
let itemsRef = db.ref('/TodoList');

export default class TodoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
            todoList: []
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
    changeText = text => {
        this.setState({
            inputText: text,
        })
    };
    onSubmitTodo = () => {
        const { todoList, inputText } = this.state;
        if (inputText !== '') {
            const newTodoItem = {
                body: inputText,
                status: 'Active',
                id: todoList.length + 1
            };
            todoList.splice(todoList.length, 0, newTodoItem)
            this.setState({
                todoList: todoList,
                inputText: '',
            });
            Additem(newTodoItem);
        }
        else {
            alert('Honey you need to write something.')
        }
    };
    onPressTodoItem = id => {
        const { todoList } = this.state;
        const todo = todoList.find(todo => todo.id === id);
        this.props.navigation.navigate("TodoDetail", { data: todo });
    };
    onLongPressTodoItem = item => {
        const prompt = `"${item.body}"`;
        Alert.alert(
            'Delete your todo?',
            prompt,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => this.onDeleteTodo(item.id) }
            ],
            { cancelable: true }
        );
    };
    onDeleteTodo = id => {
        const { todoList } = this.state;
        const foundIndex = todoList.findIndex(todo => todo.id === id);
        todoList.splice(foundIndex, 1);
        RemoveItem(id);
        this.setState({
            todoList: todoList
        })
    };

    render() {
        const { inputText, todoList } = this.state;
        setTimeout(() => {
        }, 2000);
        return (
            <View>
                <Image source={require('../assets/images/galaxy-wallpaper-36.jpg')} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                </Image>
                <ScrollView
                    horizontal={true} pagingEnabled={true}
                >
                    <KeyboardAvoidingView
                        style={{ width }}
                        enabled
                        behavior="position"
                        keyboardVerticalOffset={110}>
                        <ScrollView
                            contentContainerStyle={styles.container}>
                            <Text style={styles.TitleText}>Todo List ({todoList.length})</Text>
                            {
                                todoList.map(item => {
                                    return (
                                        <TodoItem
                                            key={item.id}
                                            data={item}
                                            onPressButton={() => this.onPressTodoItem(item.id)}
                                            onLongPressButton={() => this.onLongPressTodoItem(item)}
                                        />
                                    )
                                })
                            }
                            <TextInput style={styles.TextInput}
                                onChangeText={this.changeText}
                                value={inputText}
                            >
                            </TextInput>
                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={this.onSubmitTodo}
                            >
                                <Text style={styles.text}>
                                    Submit
                        </Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <Text style={{ height, width, }}></Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        borderRadius: 20,
        justifyContent: 'center',
        marginHorizontal: 25,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    TextInput: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'gray',
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    submitButton: {
        backgroundColor: FOLLOW_COLOR,
        justifyContent: 'center',
        height: 50,
        marginVertical: 10,

    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
    TitleText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
    }
})