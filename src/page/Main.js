import React, { Component } from 'react'
import { View, Text, TouchableOpacity,StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/Action'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        if(!this.props.dataRedux.isLogin){
            this.props.navigation.navigate('home')
        }
    }

    handleKeluar(){
        alert("Anda berhasil keluar")
        this.props.LoginAction(false,"isLogin")
        this.props.navigation.navigate("home")
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('calon')}}>
                    <Text style={styles.textStyle}>Data Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.props.navigation.navigate('pilih')}}>
                    <Text style={styles.textStyle}>Pilih Calon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.handleKeluar()}}>
                    <Text style={styles.textStyle}>Keluar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    dataRedux:state.LoginReducer
})

const mapDispatchToProps = {
    LoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

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