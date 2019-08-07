import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const FOLLOW_COLOR = 'rgb(71,113,246)';
export default class TodoItem extends Component {
    render() {
        const {
            data: { body, status },
            onPressButton,
            onLongPressButton,
        } = this.props;
        const buttonStyle = status === 'Active' ? styles.ActiveButton : styles.DoneButton;
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPressButton}
                onLongPress={onLongPressButton}
            >
                <Text style={styles.Text}>{body}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    ActiveButton: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        borderRadius: 8,
        marginTop: 15,
    },
    DoneButton: {
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: FOLLOW_COLOR,
        borderRadius: 8,
        marginTop: 15,
    },
    Text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
})