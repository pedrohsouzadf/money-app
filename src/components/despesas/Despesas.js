import React, {Component} from 'react';
import {View, StyleSheet, Image, TextInput, Button} from 'react-native';


class Despesas extends Component{
	constructor(props){
        super(props);
        this.state = {despesa:'', valor:''};
      
    } 

    render() {
    	const{ navigate } = this.props.navigation;
    	
    	return (
            <View style={styles.containertwo}>
                <TextInput style = {styles.inputDespesa}
                	placeholder="Despesa"
                	onChangeText={(despesa) => this.setState({despesa})}
                	value={this.state.despesa}>
                
                <TextInput style = {styles.inputValor}
                	placeholder="Valor"
                	onChangeText={(valor)=> this.setState({valor})}
                	value={this.state.valor}> 

                <Button style = {styles.buttonAdd}
                	onPress = {() => this.props.navigation.set}>

                </TextInput>
                </TextInput>
                </Button>	
            </View>



    }




const styles = StyleSheet.create({
    containertwo: {
        flex: 1
    },

    inputDespesa: {
        
    },

    inputValor: {

    },

    buttonAdd: {

    },
