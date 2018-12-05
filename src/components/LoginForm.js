import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import axios from 'axios';
import { Actions } from "react-native-router-flux";
import { Card, CardSection, Input, Button, Spinner} from './common';

import { HOSTURL, LOGINKEY } from "../res/constant";
import { LOGINCREDS } from "../res/keys";

class LoginForm extends Component {

    state = {userName:'', password:'', isLoading:false, showError:false};

    onUserNameTextChanged(input) {
        this.setState({...this.state, userName:input});
    }

    onPasswordTextChanged(input) {
        this.setState({...this.state, password:input});
    }

    componentWillMount() {

        AsyncStorage.getItem(LOGINCREDS).then(result => {
                if (result !== null) {
                    const dict = JSON.parse(result);
                    this.setState({...this.state, userName:dict['userName'], password:dict['password'] });
                    this.login();        
                }
            }
        );
    }

    login() {
        this.setState({...this.state, isLoading:true});

        const dict = {
            userName: this.state.userName,
            password: this.state.password
        }

        const loginURL = HOSTURL + LOGINKEY
        axios.post(loginURL,dict).then(res => {
            this.setState({...this.state, isLoading:false});

            if (res.data.status === false) {
                this.setState({...this.state, showError:true});
            } else {
                this.setState({...this.state, showError:false});
                Actions.hierarchy();
                AsyncStorage.setItem(LOGINCREDS,JSON.stringify(dict));
            }
        }).catch(error => {
            debugger;
            console.log(error);
            this.setState({...this.state, showError:true, isLoading:false});

            
        });
    }

    renderButton() {
        if (this.state.isLoading) {
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

        if (this.state.showError) {
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
                            text={this.state.userName}
                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                            label='Password' 
                            placeholder='Enter password' 
                            secureTextEntry
                            onChangeText={this.onPasswordTextChanged.bind(this)}
                            text={this.state.password}
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

export default LoginForm;