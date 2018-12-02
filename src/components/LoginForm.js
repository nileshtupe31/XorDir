import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { Header, Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {

    state = {userName:'', password:'', isLoading:false, showError:false};

    onUserNameTextChanged(input) {
        this.setState({...this.state, userName:input});
    }

    onPasswordTextChanged(input) {
        this.setState({...this.state, password:input});
    }

    login() {
        this.setState({...this.state, isLoading:true});

        const dict = {
            userName: this.state.userName,
            password: this.state.password
        }
        axios.post('https://stormy-brook-52236.herokuapp.com/api/login',dict).then(res => {
            this.props.onLogin(res.data);
            this.setState({...this.state, isLoading:false});

            if (res.data.status === false) {
                this.setState({...this.state, showError:true});
            } else {
                this.setState({...this.state, showError:false});
            }
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