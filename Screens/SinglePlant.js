import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function SinglePlant() {
    return (
        <View style={styles.container}>
            <View style={styles.uppercontainer}>
                <View style={styles.imgcontainer}>
                    <View>
                        <Image style={styles.img} source={require("../assets/leftarr.png")} />
                    </View>
                    <View style={styles.heartContainer}>
                        <Image style={styles.img} source={require("../assets/heart.png")} />
                    </View>
                </View>
                <View style={styles.mainimgContainer}>
                    <Image style={styles.mainimg} source={require('../assets/singleplant.png')} />
                </View>
                <Image style={styles.rightbush} source={require("../assets/rightbush.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1EFEF",
    },
    imgcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,

    },
    img: {
        height: 30,
        width: 30,
        objectFit: "contain",

    },
    heartContainer: {
        height: 40,
        width: 40,
        backgroundColor: "#CEDEBD",
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    mainimg: {
        height: 350,
        width: 350,
        objectFit: "contain"
    },
    mainimgContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    uppercontainer: {
        backgroundColor: "#E4E4D0",
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 30,
        position: "relative",
    },
    rightbush: {
        position: "absolute",
        height: 300,
        width: 600,
        objectFit: "contain",
        zIndex: 1,
        right: -280,
        top: -100
    },

})