import React from 'react'
import { View } from 'react-native';

const Card = ({style,children}) => {
    return (
        <View style={[Styles.cardStyle,style]}>
            {children}
        </View>
    );
};

const Styles = {
    cardStyle: {
        alignItems:'flex-start', 
        borderWidth:1,
        borderColor:'#AAA',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,

    }
}

export {Card};