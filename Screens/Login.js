import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import { useState } from 'react'
import Toast from '../components/Toast'


export default function Login({ navigation }) {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [isVisible, setIsVisible] = useState(false);

    const handlelogin = () => {
        if (username === "Sagardev" && password === "1234") {
            navigation.navigate("MainScreen");
            setusername("")
            setpassword("")
            setIsVisible(false)
        } else {
            setIsVisible(true);
            setusername("")
            setpassword("")
        }
    }

    const openGoogle = (url) => {
        Linking.openURL(url)
    }
    const openFacebook = (url) => {
        Linking.openURL(url)
    }
    const openApple = (url) => {
        Linking.openURL(url)
    }
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={require("../assets/loginimg.png")} />
                <Text style={styles.heading}>Login</Text>
            </View>
            <View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Username..."
                        placeholderTextColor={"black"}
                        onChangeText={(e) => setusername(e)}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password..."
                        placeholderTextColor={"black"}
                        onChangeText={(e) => setpassword(e)}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.loginCont2}>
                    <Text style={styles.forgettext} >forget Password?</Text>
                    <TouchableOpacity style={styles.btn} onPress={handlelogin}>
                        <Text style={styles.btntext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.circleContainer}>
                <TouchableOpacity style={styles.circle} onPress={() => openFacebook("https://www.facebook.com/")}>
                    <Image style={styles.social} source={require("../assets/fb.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={() => openGoogle("https://www.google.com/")}>
                    <Image style={styles.social} source={require("../assets/google.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.circle} onPress={() => openApple("https://www.apple.com/")}>
                    <Image style={styles.social} source={require("../assets/apple.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.gradientShadow}>
                <Image style={styles.gradientimg} source={require("../assets/grad2.png")} />
            </View>
            <View style={styles.toast}>
                <Toast isVisible={isVisible} onHide={() => setIsVisible(false)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FFDE",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative"
    },
    toast: {
        position: "absolute",
        width: "100%",
        top: 120
    },
    gradientimg: {
        width: 400,
        height: 400,
        zIndex: -1,
        transform: [{ rotate: '125deg' }]
    },
    gradientShadow: {
        position: "absolute",
        width: 300,
        height: 300,
        top: 0,
        right: -100
    },
    imgContainer: {
        gap: -12,
        alignItems: "center",
        marginTop: 100,
        zIndex: 10
    },
    img: {
        height: 400,
        width: 400,
        zIndex: 10
    },
    heading: {
        color: "#000000",
        fontSize: 32,
        fontWeight: "800",
        letterSpacing: 2
    },
    input: {
        width: 350,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1.2,
        padding: 12,
        borderRadius: 15,
        marginVertical: 6,
    },
    circle: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: "50%",
        justifyContent: "center",
        alignContent: "center",
        shadowColor: 'rgba(1, 0, 0, 0.5)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    circleContainer: {
        flexDirection: "row",
        gap: 20,
        marginBottom: 30
    },
    social: {
        height: 35,
        width: 35,
        objectFit: "cover",
        marginLeft: 7
    },
    loginCont2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20
    },
    btn: {
        backgroundColor: "#03203C",
        width: 120,
        padding: 15,
        borderRadius: 10
    },
    btntext: {
        color: "#fff",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600"
    },
    forgettext: {
        color: "#1FAA59",
        textTransform: "capitalize",
        fontSize: 14,
        fontWeight: 500
    }
})