import React from 'react';
import { View, Text, SafeAreaView  } from "react-native";

const Header = (props) => {
    return (
        <SafeAreaView style={[Styles.HeaderStyle,props.style]}>
            <Text>{props.children}</Text>
        </SafeAreaView>
    );
}

const Styles = {
    HeaderStyle: {
        height: 80, 
        backgroundColor:'#FFF', 
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#000',
        shadowOpacity:0.6,
        shadowOffset:{width:0,height:1},
        elevation:2
    }
}

export { Header };