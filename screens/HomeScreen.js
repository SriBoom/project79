import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, Image, ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View styles={styles.container}>
            <SafeAreaView style={styles.andriodSafeArea}></SafeAreaView>
            
            <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
            <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
            <Image source={require('../assets/main-icon.png')} style={styles.mainIconImage}/>
            </View>

        <TouchableOpacity style={styles.routeCard} onPress={()=>{
            this.props.navigation.navigate('DailyPic')
        }}>
            <Text style={styles.routeText}>Daily Pics</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image source={require('../assets/daily_pictures.png')} style={styles.iconImage}/>

        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard} onPress={()=>{
            this.props.navigation.navigate('SpaceCrafts')
        }}>
            <Text style={styles.routeText}>Space Crafts</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source={require('../assets/space_crafts.png')} style={styles.iconImage}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard} onPress={()=>{
            this.props.navigation.navigate('StarMap')
        }}>
            <Text style={styles.routeText}>Star Map</Text>
            <Text style={styles.knowMore}>{'Know More --->'}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source={require('../assets/star_map.png')} style={styles.iconImage}/>
        </TouchableOpacity>
        </ImageBackground>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
   andriodSafeArea:{
       marginTop:Platform.OS==="android" ? StatusBar.currentHeight:0
   },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    },
    mainIconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80,
        marginLeft:100
    }
});