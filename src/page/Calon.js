import React, { Component } from 'react'
import { View, Text,FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios';

export class Calon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFlatList:{}
        }
    }

    componentDidMount() {
            this.getData()
    }

    getData(){
        axios.get('http://192.168.43.215:8080/userjodoh/')
        .then((response)=>{
            let data =response.data
            console.log(data)
            this.setState({dataFlatList:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.dataFlatList}
                    keyExtractor={item=>parseInt(item.id)}
                    renderItem={({item})=>(
                        <View style={{borderWidth:5,borderColor:"red",flexDirection:"row",margin:5}}>
                            <Image style={{width:100,height:100}}
                                source={{uri:`http://192.168.43.215:8080/userjodoh/image/${item.image}`}}
                            />
                            <View style={{flexDirection:"column",alignSelf:"center"}}>
                                <Text>Nama : {item.name}</Text>
                                <Text>Umur : {item.umur}</Text>
                                <Text>Username : {item.username}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.LoginReducer.isLogin
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Calon)
