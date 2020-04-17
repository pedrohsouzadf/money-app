import React, {Component} from 'react';
import {View, StyleSheet,TouchableOpacity, TextInput, Text, Alert} from 'react-native';
import firebase from 'react-native-firebase';

 class Register extends Component {
    state = { email: '', password: '' };

    handleSignUp = () => { const {email, password} = this.state;
 
 
    if( (email == '') || (password== '')){
             Alert.alert('Cadastro invalido');
         }
         else if (password.length < 6){
             Alert.alert('A senha deve possuir no minimo 6 digitos');
         }
         else{
            
             try{
                firebase.auth().createUserWithEmailAndPassword(email, password);
                Alert.alert('Registro Concluido');
                this.props.navigation.navigate('Login');
             }
             catch(err){
                Alert.alert('Registro Falhou');
             }
 
         }
 
   }


  render(){
    const { navigate } = this.props.navigation;
        return(
            <View style={styles.background}>
                <View style={styles.container1}>
                    <Text style={styles.textc1}>   Registre-se ja</Text>
                </View>
                <View style={styles.container2}>
                <View style={styles2.container}>
                        <View style={styles2.containerInput}>
                            <TextInput  style={styles2.inputAccount}
                                    placeholder="Conta"
                                    placeholderTextColor="#546380"
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                    onChangeText={(email) => this.setState({email})}
                                    value={this.state.email}>

                            </TextInput>
                            <TextInput  style={styles2.inputPassword}
                                    placeholder="Senha"
                                    placeholderTextColor="#546380"
                                    secureTextEntry
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    onChangeText={(password) => this.setState({password})}
                                    value={this.state.password}>

                            </TextInput>
                        </View>
                        <View style={styles2.containerButton}>
                            <TouchableOpacity   style={styles2.buttonRegister}
                                                onPress={this.handleSignUp}>
                                <Text style={styles2.textButtonRegister}>Registrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}




const styles = StyleSheet.create({
    background: {
        height: '100%',
        width: '100%',
        backgroundColor: '#F5F8FF'
    },
    

    container1: {
        height: 90,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    textc1: {
        fontSize: 25,
        color: '#546180'
    },


    container2: {
        height: '66%',
        width: '100%'
    },
        container: {
        width: '100%',
        height: '100%'
    }
});


const styles2 = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },


    containerInput: {
        width: '100%',
        height: 90,
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


    buttonRegister: {
        marginTop: '10.6%',
        paddingBottom: '5%',
        width: '91.5%',
        height: 55,
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



export default Register;
