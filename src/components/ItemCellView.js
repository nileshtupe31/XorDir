import  React from "react";
import { View, TouchableOpacity,Text } from "react-native";
import { CardSection, Card } from "./common";

export default ItemCellView = ({text,onPress,children}) => {
    return (
        <Card>
            <CardSection style={{height:40}}>
                <TouchableOpacity onPress={onPress} style={{justifyContent:'center', margin:5, flex:1}}>
                    <Text style={{color:'grey'}}>{children}</Text>
                </TouchableOpacity>
            </CardSection>
        </Card>
    );
};