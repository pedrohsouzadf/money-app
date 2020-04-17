import { createSwitchNavigator, createAppContainer } from 'react-navigation';


import LoginForm from './src/components/Login/LoginForm.js';
import Register from './src/components/Login/Register/Register.js';

const Project= createSwitchNavigator({

    Login: {screen: LoginForm},
    Register: {screen: Register},


});

export default createAppContainer(Project);
