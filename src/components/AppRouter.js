import React from "react";
import { Router, Actions, Scene, Stack } from "react-native-router-flux";
import LoginForm from "./LoginForm";
import UserDetailForm from "./UserDetailForm";

export default AppRouter = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="login" component={LoginForm} title="Login"/>
                <Scene key="hierarchy" component={UserDetailForm} title="Hierarchy" />
            </Stack>
      </Router>    
    );
};