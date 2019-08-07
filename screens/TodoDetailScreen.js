import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TodoDetailScreen extends Component {
    render() {
        const { navigation } = this.props;
        const todoItem = navigation.getParam('data');
        return (
            <View style={styles.container}>
                <Text style={styles.statusText}> Status: {todoItem.status} </Text>
                <Text style={styles.bodyText}> {todoItem.body} </Text>
                <TouchableOpacity
                    style={styles.Backbutton}
                    onPress={() => this.props.navigation.navigate('Todo')}
                >
                    <Text style={{color:'white',fontSize:20,fontWeight:'200'}}>Go Back</Text>
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
    Backbutton: {
        marginTop: 200,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: 'rgb(71,113,246)',
    }
});