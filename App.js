import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

import LoginForm from "./src/components/LoginForm";

export default class App extends Component {

    render() {

        return (
            <View style={styles.MainContainer}>
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor:'#FFF',
        flex:1
    }
});
