import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style, styleForText }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={[buttonStyle,style]} onPress={onPress}>
            <Text style={[textStyle, styleForText]}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle:{
        flex: 1, 
        height: 40, 
        alignItems:'center', 
        justifyContent:'center',
        borderColor:'blue',
        borderWidth:1,
        margin: 5
    },
    textStyle: {
        color:'blue'
    }
}

export { Button };