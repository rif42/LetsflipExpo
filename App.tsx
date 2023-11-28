import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, VirtualizedList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Dimensions } from "react-native";
import imageData from "./data/imageData.json";
import feedData from "./lol.json";
import * as NavigationBar from "expo-navigation-bar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const getItem = (_data: any, index: number) => _data[index];

const getItemCount = (_data: number) => 5;

const keyExtractor = (item: any) => item.id;

const ImageItem = ({ item }: any) => (
    <View>
        <Image
            source={{
                uri: item.thumbnail.image_full_path,
            }}
            style={styles.feedImg}
        />
        <Text style={styles.feedItem}>{item.title}</Text>
        <Fontisto name='heart-alt' size={28} color='white' style={{ position: "absolute", right: 20, bottom: 20 }} />
        <Text style={{ position: "absolute", right: 30, bottom: 28, color: "white", fontSize: 12 }}>
            {item.total_like}
        </Text>
        <Fontisto name='comment' size={28} color='white' style={{ position: "absolute", right: 20, bottom: 60 }} />
        <Text style={{ position: "absolute", right: 33, bottom: 69, color: "white", fontSize: 12 }}>
            {item.total_comment}
        </Text>
    </View>
);

export default function App() {
    const visibility = NavigationBar.useVisibility();
    NavigationBar.setVisibilityAsync("visible");

    const [feedSearch, setfeedSearch] = React.useState<boolean>(false);
    const [feedSearchText, setfeedSearchText] = React.useState<string>("");
    const [feedTab, setfeedTab] = React.useState<boolean>(false); // 0 = trending, 1 = recent

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <SafeAreaView style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    start={{ x: 0.2, y: 0.2 }}
                    end={{ x: 1, y: 1 }}
                    colors={["navy", "magenta"]}
                    style={styles.background}
                />
                <View style={styles.topBar}>
                    <Fontisto
                        name='search'
                        size={20}
                        color='white'
                        style={styles.searchIcon}
                        onPress={() => {
                            setfeedSearch(true);
                        }}
                    />
                    <Text style={styles.letsFlipFeed}>Let's Flip!</Text>
                    <TextInput
                        style={feedSearch ? styles.searchTextInput : { display: "none" }}
                        placeholder='Search'
                        onChangeText={(text) => setfeedSearchText(text)}
                        // value={"Search"}
                    />
                    <Entypo
                        name='cross'
                        size={28}
                        color='white'
                        style={styles.searchIcon}
                        onPress={() => {
                            setfeedSearchText("");
                            setfeedSearch(false);
                        }}
                    />
                </View>
                <View style={styles.feedTabs}>
                    <TouchableOpacity
                        onPress={() => {
                            setfeedTab(!feedTab);
                        }}
                        style={styles.feedTabItems}>
                        <Text style={feedTab ? styles.feedTabItemsText : styles.feedTabItemsTextBolded}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            setfeedTab(!feedTab);
                        }}
                        style={styles.feedTabItems}>
                        <Text style={feedTab ? styles.feedTabItemsTextBolded : styles.feedTabItemsText}>Recent</Text>
                    </TouchableOpacity>
                </View>
                {/* <Text>{feedData[3].id}</Text> */}
                <View style={styles.imgContainer}>
                    <VirtualizedList
                        initialNumToRender={1}
                        snapToInterval={windowHeight / 1.288}
                        style={styles.VirtualizedListcontainer}
                        data={feedData}
                        getItem={getItem}
                        getItemCount={getItemCount}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => <ImageItem item={item} />}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <StatusBar style='light' />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'navy',
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },

    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        width: "100%",
    },
    topBar: {
        display: "flex",
        alignSelf: "flex-start",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        // backgroundColor: "red",
        flexDirection: "row",
    },
    searchIcon: {
        margin: 10,
    },
    letsFlipFeed: {
        display: "flex",
        alignSelf: "center",
        fontSize: 25,
        color: "white",
    },
    searchTextInput: {
        display: "flex",
        flex: 1,
        position: "absolute",
        left: "13%",
        height: 40,
        width: "75%",
        backgroundColor: "white",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    feedTabs: {
        display: "flex",
        width: "100%",
        height: "7.5%",
        // backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "white",
        borderBottomWidth:1,
        borderBottomColor: "white",
    },
    feedTabItems: {
        display: "flex",
        flexGrow: 1,
        height: "100%",
        // backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
    },

    feedTabItemsText: {
        color: "white",
    },
    feedTabItemsTextBolded: {
        color: "white",
        fontSize: 16,
        fontWeight: "900",
        textDecorationLine: "underline",
    },
    imgContainer: {
        display: "flex",
        width: "100%",
        height: "77.6%",
        backgroundColor: "blue",
        // flexDirection: "column",
        // justifyContent: "space-around",
        // alignItems: "center",
    },
    VirtualizedListcontainer: {
        width: "100%",
        height: "100%",
    },
    feedItem: {
        position: "absolute",
        fontSize: 28,
        color: "white",
        padding: 20,
        // justifyContent: "space-around",
        // alignItems: "center",
    },
    feedImg: {
        width: windowWidth,
        height: windowHeight / 1.288,
        objectFit: "cover",
    },
});
