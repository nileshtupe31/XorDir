import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Header, Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {

    state = {userName:'', password:''};
    
    componentWillReceiveProps(nextProps) {

    }

    onUserNameTextChanged(input) {
        this.setState({...this.state, userName:input});
    }

    onPasswordTextChanged(input) {
        this.setState({...this.state, password:input});
    }

    login() {
        const dict = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post('https://stormy-brook-52236.herokuapp.com/api/login',dict).then(res => {
            debugger;
            this.props.onLogin(res.data);
            
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:'#999'}}>
                LOGIN
                </Header>
                
                <View style={[styles.loginContainer]}>
                    <Card>
                        <CardSection>
                            <Input 
                            label='User Name' 
                            placeholder='Enter user name' 
                            onChangeText={this.onUserNameTextChanged.bind(this)}

                            />
                        </CardSection>
                        <CardSection>
                            <Input 
                            label='Password' 
                            placeholder='Enter password' 
                            secureTextEntry
                            onChangeText={this.onPasswordTextChanged.bind(this)}
                            />
                        </CardSection>
                        <CardSection>
                            <Button 
                                style={{borderColor:'green'}} 
                                onPress={()=> {
                                    console.log(this.state);
                                    this.login();

                                }}
                                styleForText={{color:'green'}}
                            > LOGIN </Button>
                        </CardSection>
                    </Card>
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