import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';


class Login extends Component{
	constructor(props){
        super(props);

    }


    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container1}>
                    <Image source={require("../../images/logo.jpg")} style={styles.photo}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    

    container1: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    photo: {
        height: 170,
        width: 146
    },

});



export default Login;
