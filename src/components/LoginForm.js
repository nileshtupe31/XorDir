import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { connect } from "react-redux";

import { 
    userNameChanged, 
    passwordChanged,
    login,
    savedUser 
} from "../Actions";
import { Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {

    onUserNameTextChanged(input) {
        this.props.userNameChanged(input);
    }

    onPasswordTextChanged(input) {
        this.props.passwordChanged(input);
    }

    componentWillMount() {
        this.props.savedUser()
    }

    login() {
        this.props.login(this.props.userName, this.props.password);
    }
    
    renderButton() {
        if (this.props.isLoading === true) {
            return(
                <Spinner />
            );
        } else {
            return(
                <Button
                style={{borderColor:'green'}}
                onPress={(btn)=> {
                    this.login();
                }}
                styleForText={{color:'green'}}
                >
                LOGIN
                </Button>
            );
        }
    }

    showError() {

        if (this.props.showError) {
            return(
                <View style={{flex:0, alignItems:'center',justifyContent:'center', paddingTop:10}}>
                    <Text style={{height:40, color:'red' }}>Invalid username or password</Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={[styles.loginContainer]}>
                    <Card>
                        <CardSection>
                            <Input
                            label='User Name'
                            placeholder='Enter user name'
                            onChangeText={this.onUserNameTextChanged.bind(this)}
                            text={this.props.userName}
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                            label='Password'
                            placeholder='Enter password'
                            onChangeText={this.onPasswordTextChanged.bind(this)}
                            text={this.props.password}
                            secureTextEntry
                            />
                        </CardSection>
                        <CardSection>
                            {this.renderButton()}
                        </CardSection>
                    </Card>
                    {this.showError()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1
        },
        loginContainer: {
            flex:0,
            justifyContent:'center',
            alignItems:'center'
        }
    }
);

const mapStateToProps = (state) => {
    console.log(state);
    
    return ({
        userName: state.auth.userName,
        password: state.auth.password,
        isLoading: state.auth.isloading,
        showError: state.auth.showError    
    });
}

export default connect(mapStateToProps, {
    userNameChanged,
    passwordChanged,
    login,
    savedUser
})(LoginForm);
