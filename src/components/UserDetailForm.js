import React, { Component } from "react";
import { Text, View, SectionList } from 'react-native'
import { connect } from "react-redux";

import ItemCellView from "./ItemCellView";
import { Spinner } from "./common";
import { fetchHierarchy } from "../Actions";


class UserDetailForm extends Component {

    componentWillMount() {
        this.props.fetchHierarchy('ntupe');
    }

    onCellItemPress(item, cellItem) {

    }

    render() {
        return(
            <View style={{flex:1}}>
                {this.renderDetails()}
            </View>
        );
    }
    renderDetails() {

        if (this.props.isloading === true) {
            return (
                <Spinner />
            );
        } else {

            const {name, peers, reports } = this.props.empData;
            return (
                <SectionList
                renderItem={({item, index, section}) => 
                    <ItemCellView onPress={this.onCellItemPress.bind(this,item)} key={index} >{item.name}</ItemCellView>
                }
                
                renderSectionHeader={({section: {title}}) => (
                    <Text style={{fontWeight: 'bold', margin:5, paddingTop:10}}>{title}</Text>
                )}

                sections={[
                    {title: 'Employee Name', data: [name]},
                    {title: 'Peers', data: peers},
                    {title: 'Reports', data: reports},
                ]}
                
                keyExtractor={(item, index) => item + index}
                />
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log(state.employee.empData);
    
    return({
        empData: state.employee.empData,
        isloading: state.employee.isloading
    });
}

export default connect(mapStateToProps,{
    fetchHierarchy
}) (UserDetailForm)