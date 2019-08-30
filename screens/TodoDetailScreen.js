import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TODOS } from '../constants/Utils';
import {UpdateItem } from '../services/ItemServices';


export default class TodoDetailScreen extends Component {
    state = {
        inputText: '',
        text: this.props.navigation.getParam('data').body,
    }
    onPress = (todoItem, id) => {
        const {inputText} = this.state;
        UpdateItem(id,inputText,todoItem.status)
        if(inputText!==''){
            this.setState({
                text: inputText,
            })
        }
    };

    changeText = TextInPut =>{
        this.setState({
            inputText: TextInPut,
        })
    }
    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam('data');
        return (
            <View style={styles.container}>
                <Text style={styles.statusText}> Status: {todoItem.status} </Text>
                <Text style={styles.bodyText}> {this.state.text} </Text>
                <Text>Change todo: </Text>
                <TextInput style={styles.TextInput}
                    onChangeText={this.changeText}
                >
                </TextInput>
                <TouchableOpacity
                    style={styles.OkButton}
                    onPress={() => this.onPress(todoItem, todoItem.id)}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '200' }}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Backbutton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '200' }}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    statusText: {
        marginVertical: 20,
        fontSize: 40,
        fontWeight: '400',
    },
    bodyText: {
        fontSize: 30,
        fontWeight: '300',
        textAlign: 'center',
        marginHorizontal: 20,
    },
    TextInput: {
        height:80,
        width:300,
        borderRadius: 10,
        borderColor:'gray',
        borderWidth:1,
    },
    OkButton:{
        marginTop: 150,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(71,113,246)',
    },
    Backbutton: {
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(71,113,246)',
    }
});