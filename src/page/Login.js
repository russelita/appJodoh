import React, { Component } from 'react'
import { View, Text ,StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/Action'
import axios from 'axios'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:"",
            phone:""
        }
    }

    handleLogin(){
        axios.get('http://192.168.43.215:8080/userjodoh/login/',{
            params:{
                username:this.state.username,
                phone:this.state.phone,
            }
        })
        .then((response) =>{
            let data=response.data;
            if(data !== ""){
                this.props.LoginAction(true,"isLogin")
                this.props.LoginAction(data,"dataUser")
                alert("Login suksess")
                this.props.navigation.navigate('main')
            }else{
                alert("login gagal")
                this.props.LoginAction(false,"isLogin")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text> Username </Text>
                <TextInput placeholder="masukan username" onChangeText={(value)=>{this.setState({username:value})}}/>
                <Text> Phone </Text>
                <TextInput placeholder="masukan phone" onChangeText={(value)=>{this.setState({phone:value})}}/>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleLogin()}}><Text style={styles.textStyle}>Login</Text></TouchableOpacity>

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    LoginAction   
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
    viewStyle:{
        margin:20,
    },

    buttonStyle:{
        borderWidth:10,
        borderColor:"red",
        margin:20
    },

    textStyle:{
        textAlign:'center',
    }


})