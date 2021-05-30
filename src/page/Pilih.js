import React, { Component } from 'react'
import { View, Text} from 'react-native'
import { connect } from 'react-redux'
import TinderCard from 'react-tinder-card'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import axios from 'axios'
// import { PanResponder, Dimensions } from 'react-native'
// import { useSpring, animated } from 'react-spring/native'
// const { height, width } = Dimensions.get('window')

export class Pilih extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            character: {},
            lastDirection:""
        }
    }

    getData(){
        axios.get('http://192.168.43.215:8080/userjodoh/')
        .then((response)=>{
            let data =response.data
            console.log(data)
            this.setState({character:data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // Simple() {
    //     this.setState({character:this.state.dataCard})
    // }

    swiped(direction, nameToDelete){
        console.log('removing: ' + nameToDelete)
        this.setState.lastDirection(direction)
    }

    outOfFrame(name){
        console.log(name + ' left the screen!')
    }

    swipe = (dir) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = this.state.character.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
    }
    
    // filterBy(filterObj) {
    // // This syntax creates a new seperate copy of the data array
    // let selectedData = [...data]
    // // Loop through each property on the filter object
    // for (const property in filterObj) {
    //     // For each property, filter the selected data to matching objects
    //     selectedData = selectedData.filter(o => o[property] === filterObj[property]);
    // }
    // // Use your filtered data
    // console.log(selectedData)
    // }

        render() {
            return (
                <View style={styles.container}>
                    <Card style={styles.cardContainer}>
                        {characters.map((character) =>
                            <TinderCard key={character.name} onSwipe={(dir) => this.swiped(dir, character.name)} onCardLeftScreen={() => this.outOfFrame(character.name)}>
                                <Card style={styles.card}>
                                    <CardImage style={styles.cardImage}
                                               source={character.image}>
                                        <CardTitle style={styles.cardTitle}>{character.name}</CardTitle>
                                    </CardImage >
                                </Card>
                            </TinderCard>
                        )}
                    </Card>
                    <Buttons>
                        <Button style={styles.buttonStyle} onPress={() => swipe('left')} title='Swipe left!' />
                        <Button style={styles.buttonStyle} onPress={() => swipe('right')} title='Swipe right!' />
                    </Buttons>
                </View>
            )
        }
}


const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Pilih)

const styles=StyleSheet.create({
    buttonStyle:{
        borderWidth:10,
        borderColor:"red",
        margin: "20px",
        zindex: -100
    },

    textStyle:{
        textAlign:'center',
    },

    container: {
        display: flex,
        alignitems: center,
        justifycontent: center,
        width: "100%"
    },
    header: {
        color: "#000",
        fontsize: "30px",
        marginbottom : "30px"
    },
    cardContainer: {
        width: "90%",
        maxwidth: "260px",
        height: "300px"
    },
    card: {
        position: absolute,
        backgroundcolor: "#fff",
        width: "100%",
        maxwidth: "260px",
        height: "300px",
        shadowcolor: black,
        shadowopacity: 0.2,
        shadowradius: "20px",
        borderradius: "20px",
        resizemode: cover
    },
    cardImage: {
        width: "100%",
        height: "100%",
        overflow: hidden,
        borderradius: "20px"
    },
    cardTitle: {
        position: absolute,
        bottom: 0,
        margin: "10px",
        color: "#fff"
    }
})