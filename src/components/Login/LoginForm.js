import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity, Alert} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import firebase from 'react-native-firebase';

import Login from './Login.js';

export default class LoginForm extends Component {
    static navigationOptions = {
        header: null,
      };


      state = { email: '', password: ''}

      handleLogin = () => {
        const { email, password } = this.state;
        if((email != '') && (password != '')){
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch((err) => {Alert.alert("Conta e/ou Senha invalidas")})}
      }




    constructor(props){
        super(props);

        this.state = {
            login: new Login(),
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.containerLogin}>
                    {this.state.login.render()}
                </View>
                <View style={styles.containerInput}>
                    <TextInput  style={styles.inputAccount}
                                    autoCorrect={false}
                                    autoCapitalize = "none"
                                    keyboardType='email-address'
                                    placeholder="Conta"
                                    placeholderTextColor="#546380"
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}>

                        </TextInput>
                        <TextInput  style={styles.inputPassword}
                                    autoCorrect={false}
                                    autoCapitalize = "none"
                                    placeholder="Senha"
                                    placeholderTextColor="#546380"
                                    secureTextEntry
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}>

                        </TextInput>
                        <View style={styles.containerButton}>
                        <TouchableOpacity   style={styles.buttonLog}
                                            onPress={(this.handleLogin)}>
                            <Text style={styles.textButtonLog}>Entrar</Text>
                        </TouchableOpacity>
                        <View style={styles.viewOr}>
                            <View style={styles.viewOrSvg1}>
                                <Svg height='100%' width='100%'>
                                    <Line   x1='0%' y1='42.31%'
                                            x2='100%' y2='42.31%'
                                            stroke='#546380'
                                            strokeWidth='1'/>
                                </Svg>
                            </View>
                            <Text   style={styles.viewOrText}
                                    textAlign='center'>   OU</Text>
                            <View style={styles.viewOrSvg1}>
                                <Svg height='100%' width='100%'>
                                    <Line   x1='0%' y1='42.31%'
                                            x2='100%' y2='42.31%'
                                            stroke='#546380'
                                            strokeWidth='1'/>
                                </Svg>
                            </View>
                        </View>
                        <TouchableOpacity   style={styles.buttonRegister}
                                            onPress={() => this.props.navigation.navigate('Register')} >
                            <Text style={styles.textButtonRegister}>Registrar</Text>
                        </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    containerLogin: {
        flex: 2
    },


    containerInput: {
        flex: 4,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inputAccount: {
        width: '91.5%',
        height: 39,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#C4C6CC'
    },
    inputPassword: {
        marginTop: '2.3%',
        width: '91.5%',
        height: 39,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#C4C6CC'
    },


    containerButton: {
        width: '100%',
        height: '60%',
        alignItems: 'center'
    },
    buttonLog: {
        marginTop: '10.6%',
        width: '91.5%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A8C5FF'
    },
    textButtonLog: {
        fontSize: 20
    },

    viewOr: {
        marginTop: '10.6%',
        width: '91.5%',
        height: '10.5%',
        flexDirection: 'row'        
    },
    viewOrSvg1: {
        width: '38.66%',
        height: '100%',
    },
    viewOrText: {
        width: '21.54%',
        height: '80%',
        paddingLeft: '5%',
        textAlignVertical: 'center',
        color: '#546380'

    },


    buttonRegister: {
        marginTop: '10.6%',
        width: '91.5%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E4980'
    },
    textButtonRegister: {
        fontSize: 20,
        color: '#F5F8FF'
    }
});