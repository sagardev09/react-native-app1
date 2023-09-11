import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Screen2({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("../assets/logo1.png")} />
            </View>
            <View>
                <Image style={styles.img} source={require("../assets/img2.png")} />
            </View>
            <View style={styles.titContainer}>
                <Text style={styles.tit1}>Translate global live audio feeds to readable text in the format you enjoy</Text>
                <Text style={styles.tit2}>we currently support more than 90 different languages worldwide</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.circleContainer}>
                    <View style={styles.circle1}></View>
                    <View style={styles.circle2}></View>
                    <View style={styles.circle3}></View>
                    <View style={styles.circle4}></View>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen3')}>
                        <Text style={styles.btntext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.backTouchable} onPress={() => navigation.navigate('Home')}>
                <Image style={styles.backimg} source={require("../assets/back.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backTouchable: {
        position: "absolute",
        left: 20,
        top: 66,
    },
    backimg: {
        height: 40,
        width: 40
    },
    logo: {
        height: 60,
        width: 60,
        marginTop: 60
    },
    img: {
        height: 380,
        width: 380
    },
    container: {
        backgroundColor: "#FF6263",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },
    titContainer: {
        marginBottom: 38
    },
    tit1: {
        textAlign: "center",
        fontSize: 20,
        paddingHorizontal: 28,
        fontWeight: "500",
        color: "#000000",
        lineHeight: 30
    },
    tit2: {
        textAlign: "center",
        fontSize: 16,
        paddingHorizontal: 20,
        fontWeight: "500",
        color: "#CAD5E2",
        marginVertical: 18
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 28,
        marginBottom: 34,
        width: "100%"
    },
    circleContainer: {
        flexDirection: "row",
        gap: 8
    },
    circle1: {
        backgroundColor: "white",
        height: 12,
        width: 12,
        borderRadius: "50%"
    },
    circle3: {
        backgroundColor: "white",
        height: 12,
        width: 12,
        borderRadius: "50%"
    },
    circle4: {
        backgroundColor: "white",
        height: 12,
        width: 12,
        borderRadius: "50%"
    },
    circle2: {
        backgroundColor: "#000000",
        height: 12,
        width: 40,
        borderRadius: "50%"
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 10,
        width: 100,
        borderRadius: 25
    },
    btntext: {
        color: '#fff',
        fontWeight: "600"
    }
})