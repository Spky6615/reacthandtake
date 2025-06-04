import {StyleSheet, Text, View} from "react-native";
import {useState} from "react";

const val="Est ce que c'est bon pour vousss??"
export default function IndexJs() {
    return (
        <View style={pageStyle.viewStyle}>
            <Text style={pageStyle.textStyle}>{val}</Text>
            <Text style={pageStyle.textStyle}>{val}</Text>
        </View>
    );
}

const pageStyle = StyleSheet.create({
    viewStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        backgroundColor: "blue",
        color: "white",
        marginHorizontal: 10,
        borderWidth: 19,
        borderStyle: "solid",
        borderColor: "white"
    }
})