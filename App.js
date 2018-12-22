import React, { Component } from "react";
import { View, StyleSheet } from 'react-native';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import AppRouter from "./src/components/AppRouter";
import Reducers from "./src/Reducers";

export default class App extends Component {

    render() {
        const store = createStore(Reducers,{}, applyMiddleware(reduxThunk));

        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor:'#FFF',
        flex:1
    }
});
