import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import img1 from "../assets/flow1.png"
import img2 from "../assets/flow2.png"
import img3 from "../assets/flow3.png"
import img4 from "../assets/flow4.png"
import img5 from "../assets/flow6.png"
import img6 from "../assets/flow7.png"
import img7 from "../assets/flow8.png"
import img8 from "../assets/flow5.png"
import img9 from "../assets/flow9.png"
import img10 from "../assets/flow10.png"

import h1 from "../assets/h1.png"
import h2 from "../assets/h2.png"
import h3 from "../assets/h3.png"
import h4 from "../assets/h4.png"
import h5 from "../assets/h5.png"

export default function MainScreen({ navigation }) {

    const flowerData = [
        { uid: 1, name: 'Orchid', category: 'Outdoor', price: 10.99, imageUrl: img1, color: '#E8BD0D', },
        { uid: 2, name: 'Corpse', category: 'Outdoor', price: 7.99, imageUrl: img2, color: '#22CB5C', },
        { uid: 3, name: 'Lily', category: 'Indoor', price: 15.99, imageUrl: img3, color: '#1B98F5', },
        { uid: 4, name: 'Bleeding', category: 'Outdoor', price: 5.99, imageUrl: img4, color: '#EF5354', },
        { uid: 5, name: 'Gibraltar', category: 'Indoor', price: 12.99, imageUrl: img5, color: '#FF5733', },
    ];
    const flowerData2 = [
        { uid: 1, name: 'Shade-loving, feathery blooms', category: 'Astilbe', price: 10.99, imageUrl: img6, color: '#E8BD0D', },
        { uid: 2, name: 'Vibrant annuals, ideal for cutting', category: 'Zinnia', price: 7.99, imageUrl: img7, color: '#22CB5C', },
        { uid: 3, name: 'Early spring nodding flowers', category: 'Hellebore', price: 15.99, imageUrl: img8, color: '#1B98F5', },
        { uid: 4, name: 'Delicate, daisy-like blooms', category: 'Anemone', price: 5.99, imageUrl: img9, color: '#EF5354', },
        { uid: 5, name: 'Bright yellow poppies', category: 'Hoya', price: 12.99, imageUrl: img10, color: '#FF5733', },
    ];

    const Propertydata = [
        { uid: 1, name: 'PetalCraft', openingtime: '9am - 12pm', imageUrl: h1, color: '#E8BD0D', },
        { uid: 2, name: 'WildRoots', openingtime: '10am - 12pm', imageUrl: h2, color: '#22CB5C', },
        { uid: 3, name: 'SeedScape', openingtime: '9am - 8pm', imageUrl: h3, color: '#1B98F5', },
        { uid: 4, name: 'Botanix', openingtime: '12am - 12pm', imageUrl: h4, color: '#EF5354', },
        { uid: 5, name: 'RootsRise', openingtime: '10am - 10pm', imageUrl: h5, color: '#FF5733', },
    ];

    const handlesingleproduct = () => {
        navigation.navigate("SinglePlant")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.disctext}>Discovery</Text>
                    </View>
                    <View style={styles.mainppContainer}>
                        <View style={styles.ppcontainer}>
                            <Image style={styles.pp} source={require("../assets/pp.png")} />
                        </View>
                        <View style={styles.avtarno}>
                            <Text style={styles.avtartext}>3</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.searchbar} >
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Search Plant" />
                    </View>
                    <View style={styles.searchicon}>
                        <Image style={styles.search} source={require("../assets/search.png")} />
                    </View>
                    <View style={styles.micicon}>
                        <Image style={styles.mic} source={require("../assets/mic.png")} />
                    </View>
                </View>
                <View style={styles.categoryname}>
                    <Text style={styles.categoryname1}>Recommend</Text>
                    <Text style={styles.categoryname2}>Top</Text>
                    <Text style={styles.categoryname2}>Indoor</Text>
                    <Text style={styles.categoryname2}>Outdoor</Text>
                </View>
                <View style={styles.category}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        {
                            flowerData.map((item) => (
                                <TouchableWithoutFeedback onPress={handlesingleproduct} key={item.uid} i>
                                    <View style={[styles.subcategory, { backgroundColor: item.color, overflow: 'hidden' }]} >
                                        <View>
                                            <Image style={styles.flowimg} source={item.imageUrl} />
                                        </View>
                                        <View style={styles.infoconatiner}>
                                            <View>
                                                <Text style={styles.infocategory}>{item.category}</Text>
                                                <Text style={styles.infoname}>{item.name}</Text>
                                            </View>
                                            <View style={styles.priceconatiner}>
                                                <Text style={[styles.pricetext, { color: item.color }]}>{item.price}</Text>
                                            </View>
                                        </View>
                                        <Image style={styles.bgshade} source={require("../assets/bg.png")} />
                                    </View>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.recentContainer}>
                    <View>
                        <Text style={styles.recenttext}>Recent Viewed</Text>
                    </View>
                    <View style={styles.dotContainer}>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                        <View style={styles.dot}></View>
                    </View>
                </View>
                <View style={styles.recentviewed}>
                    <ScrollView horizontal showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                        {
                            flowerData2.map((item) => (

                                <View style={[styles.recentviewedcategory]} key={item.uid} >
                                    <View style={[styles.recentviewedcategorycontainer, { backgroundColor: item.color, overflow: 'hidden' }]}>
                                        <Image style={[styles.recentviewedimg]} source={item.imageUrl} />
                                        <Image style={styles.recentviewedbgshade} source={require("../assets/bg.png")} />
                                    </View>
                                    <View style={styles.recentviewedinfoconatiner}>
                                        <Text style={styles.recentviewedinfocategory}>{item.category}</Text>
                                        <Text style={styles.recentviewedinfoname}>{item.name}</Text>
                                    </View>
                                </View>

                            ))
                        }
                    </ScrollView>
                </View>
                <View style={styles.nearbyContainer}>
                    <View>
                        <Text style={styles.nearbyheading}>Nearby Nursery</Text>
                    </View>
                    <View>
                        <ScrollView horizontal showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false}>
                            {
                                Propertydata.map((item) => (
                                    <View key={item.uid} style={[styles.nearbysubContainer, { backgroundColor: item.color, }]}>
                                        <View style={styles.nearbyinnercontainer}>
                                            <View style={styles.nearbynamecontainer}>
                                                <Text style={styles.nearbynametitle}>{item.name}</Text>
                                            </View>
                                            <View style={styles.nearbyopening}>
                                                <Text style={styles.nearbyopeningheading}>opening time</Text>
                                                <Text style={styles.nearbyopeningtitle}>{item.openingtime}</Text>
                                            </View>
                                        </View>

                                        <Image style={styles.houseimg} source={item.imageUrl} />
                                        <Image style={styles.cloudimg} source={require("../assets/cloud.png")} />
                                        <Image style={styles.birdimg} source={require("../assets/birds.png")} />

                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        marginTop: 80,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    mainppContainer: {
        position: "relative"
    },
    ppcontainer: {
        height: 45,
        width: 45,
        backgroundColor: "#CAD5E2",
        borderRadius: "50%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    pp: {
        height: 35,
        width: 35
    },
    avtarno: {
        position: "absolute",
        height: 18,
        width: 18,
        backgroundColor: "#22CB5C",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        right: -0,
        top: -4,
        borderWidth: 1,
        borderColor: "white"
    },
    disctext: {
        fontSize: 26,
        fontWeight: "400",
        letterSpacing: 2
    },
    avtartext: {
        color: "white",
        textAlign: "center",
        fontSize: 12
    },
    searchbar: {
        position: "relative",
        marginTop: 30,
        marginHorizontal: 20
    },
    input: {
        backgroundColor: "white",
        paddingVertical: 18,
        paddingHorizontal: 55,
        borderRadius: 25
    },
    search: {
        height: 22,
        width: 22
    },
    mic: {
        height: 22,
        width: 22
    },
    searchicon: {
        position: "absolute",
        top: 15,
        left: 18
    },
    micicon: {
        position: "absolute",
        top: 15,
        right: 18
    },
    categoryname: {
        paddingTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    categoryname1: {
        color: "black",
        fontSize: 16,
        fontWeight: "700"
    },
    categoryname2: {
        color: "gray",
        fontSize: 16,
        fontWeight: "700"
    },
    category: {
        marginVertical: 25,
        marginLeft: 20
    },
    subcategory: {
        height: 350,
        width: 220,
        borderRadius: 15,
        marginRight: 15,
        paddingVertical: 10,
        paddingHorizontal: 5,
        justifyContent: "center",
        position: "relative"

    },
    flowimg: {
        height: 200,
        width: 200,
        objectFit: "contain"
    },
    infoconatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 10,
        marginTop: 50
    },
    infocategory: {
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 2,
        color: "#fff",
        marginBottom: 5
    },
    infoname: {
        fontSize: 20,
        fontWeight: "700",
        letterSpacing: 3,
        color: "#fff"
    },
    priceconatiner: {
        backgroundColor: "#fff",
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 25

    },
    pricetext: {
        fontSize: 14,
        fontWeight: "800"
    },
    bgshade: {
        position: "absolute",
        height: 400,
        width: 300,
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.35,
        top: 0,
        left: 0
    },
    recentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20
    },
    recenttext: {
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 2
    },
    dotContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    },
    dot: {
        height: 8,
        width: 8,
        backgroundColor: "#000000",
        borderRadius: "50%"
    },
    recentviewed: {
        marginLeft: 20,
        marginVertical: 20
    },
    recentviewedcategory: {
        height: 100,
        width: 300,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
        marginVertical: 10

    },
    recentviewedimg: {
        height: 80,
        width: 80,
        objectFit: "contain"
    },
    recentviewedinfoconatiner: {
        gap: 5
    },
    recentviewedinfocategory: {
        fontSize: 18,
        fontWeight: "700",
        letterSpacing: 2
    },
    recentviewedinfoname: {
        fontSize: 12,
        fontWeight: "400",
        color: "black",
        opacity: 0.5
    },
    recentviewedcategorycontainer: {
        borderRadius: 25,
        position: "relative"
    },
    recentviewedbgshade: {
        position: "absolute",
        height: 80,
        width: 80,
        objectFit: "cover",
        zIndex: -1,
        opacity: 0.35,
        top: 0,
        left: 0
    },
    nearbyContainer: {
        paddingHorizontal: 20,

    },
    nearbyheading: {
        fontSize: 20,
        fontWeight: "600",
        textTransform: "capitalize",
        letterSpacing: 2
    },
    nearbysubContainer: {
        marginVertical: 50,
        marginRight: 10,
        flex: 1,
        height: 170,
        width: 370,
        borderRadius: 25,
        position: "relative"

    },
    nearbyinnercontainer: {
        gap: 15,
        paddingHorizontal: 20,
        justifyContent: "center",
        height: "100%"
    },
    nearbynamecontainer: {},
    nearbynametitle: {
        fontSize: 24,
        fontWeight: "900",
        fontStyle: "normal",
        letterSpacing: 1,
        color: "#fff",
        textTransform: "capitalize"
    },
    nearbyopening: {
        gap: 5
    },
    nearbyopeningheading: {
        fontSize: 20,
        fontWeight: "800",
        fontStyle: "normal",
        letterSpacing: 1,
        color: "#fff",
        textTransform: "capitalize"
    },
    nearbyopeningtitle: {
        fontSize: 18,
        fontWeight: "800",
        fontStyle: "normal",
        letterSpacing: 1,
        color: "#fff",
        textTransform: "capitalize",
        opacity: 0.8
    },
    houseimg: {
        position: "absolute",
        bottom: 0,
        height: 130,
        width: 200,
        right: 0,
        objectFit: "fill"
    },
    cloudimg: {
        position: "absolute",
        top: -35,
        height: 100,
        width: 250,
        right: 0,
        objectFit: "fill",
        opacity: 0.6
    },
    birdimg: {
        position: "absolute",
        top: -40,
        height: 100,
        width: 250,
        right: 0,
        objectFit: "fill"
    }

})

