import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Header, Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header style={{backgroundColor:'#999'}}>
                LOGIN
                </Header>
                
                <View style={[styles.loginContainer]}>
                    <Card>
                        <CardSection>
                            <Input label='User Name' placeholder='Enter user name'/>
                        </CardSection>
                        <CardSection>
                            <Input label='Password' placeholder='Enter password' secureTextEntry/>
                        </CardSection>
                        <CardSection>
                            <Button 
                                style={{borderColor:'green'}} 
                                onPress={()=> {
                                    console.log('I am clicked');
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