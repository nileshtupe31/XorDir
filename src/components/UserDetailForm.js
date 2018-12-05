import React, { Component } from "react";
import { Text, View, SectionList } from 'react-native'
import axios from "axios";
import ItemCellView from "./ItemCellView";
import { Spinner } from "./common";
import { HOSTURL, HIERARCHYKEY } from "../res/constant";


class UserDetailForm extends Component {

    state = {isFetching: true, }
    componentWillMount() {
        this.setState({...this.state, isFetching:true, tableData:{
            name:'',
            peers:[],
            reports:[]
        }});

    this.fetchEmployeeHierarchy('ukamdar');
        
    }

    fetchEmployeeHierarchy(empId) {
        const url = HOSTURL + HIERARCHYKEY + '?empId=' + empId
        axios.get(url).then((res) => {
            let data = res.data;
            this.setState({...this.state,isFetching:false, tableData:data});
        });
    }

    onCellItemPress(item, cellItem) {
        debugger;

    }

    render() {
        return(
            <View style={{flex:1}}>
                {this.renderDetails()}
            </View>
        );
    }
    renderDetails() {

        if (this.state.isFetching) {
            return (
                <Spinner />
            );
        } else {

            const {name, peers, reports } = this.state.tableData;
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

export default UserDetailForm