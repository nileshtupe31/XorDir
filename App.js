import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';

import AppRouter from "./src/components/AppRouter";

export default class App extends Component {
    
    render() {

        return (
            <View style={styles.MainContainer}>
                <AppRouter />
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
