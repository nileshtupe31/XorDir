import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

import LoginForm from "./src/components/LoginForm";
import UserDetailForm from "./src/components/UserDetailForm"

export default class App extends Component {

    state = {'userLoggedIn': true};
    onLogin(data) {
        console.log(data);
        this.setState({...this.state, 'userLoggedIn': data.status});
        
    }

    renderState() {
        if (this.state.userLoggedIn) {
            return (
                <UserDetailForm />
            );
        } else {
            return (
                <LoginForm onLogin={this.onLogin.bind(this)} />
            );
        }
    }
    render() {

        return (
            <View style={styles.MainContainer}>
                {this.renderState()}
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
