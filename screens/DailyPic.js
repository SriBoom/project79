import React, { Component } from 'react';
import { Alert, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, Linking, Image, Platform, StyleSheet } from 'react-native';
import axios from 'axios';

export default class DailyPics extends Component {
    constructor(props){
        super(props);
        this.state={
            apod:{}
        }
    }

    getAPOD=()=>{
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=lTM9FIOtSeMjfMmKRBtA7se6R5dckjmwhGYsm8vG")
        .then(responce =>{
            this.setState({apod:responce.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground 
                source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                <Text style={styles.routeText}>Daily Pics!</Text> 
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <TouchableOpacity style={styles.listContainer}
                onPress={()=>
                    Linking.openURL(this.state.apod.url)
                .catch(err=>console.error("Couldn't Load Page",err))
                }
                >
                    <View style={styles.container}>
                        <Image source={require("../assets/play-video.png")} style={{width:50, height:50}}></Image>
                    </View>
                </TouchableOpacity>
                <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    },
    titleText: {
        fontSize:30,
        fontWeight:'bold',
        color:'purple'
    },
    listContainer: {
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    explanationText: {
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})