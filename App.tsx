import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";

export default function App() {
    const [feedSearch, setfeedSearch] = React.useState<boolean>(false);
    const [feedSearchText, setfeedSearchText] = React.useState<string>("");
    const [feedTab, setfeedTab] = React.useState<boolean>(false); // 0 = trending, 1 = recent

    return (
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
                    color='black'
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
                    color='black'
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
            <Text>LMAO</Text>
            <StatusBar style='light' />
        </SafeAreaView>
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
        backgroundColor: "red",
        flexDirection: "row",
    },
    searchIcon: {
        margin: 10,
    },
    letsFlipFeed: {
        display: "flex",
        alignSelf: "center",
        fontSize: 25,
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
        backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    feedTabItems: {
        display: "flex",
        flexGrow: 1,
        height: "100%",
        backgroundColor: "green",
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
});
