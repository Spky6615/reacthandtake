import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Image} from "expo-image";
import {useState} from "react";

const name = "BEN"
export default function Cat({name, hungryFace, satisfiedFace}) {

    const [emotion, setEmotion] = useState(true);

    function toggleEmotion() {
        setEmotion(!emotion);
    }

    return (<View>
            <Text>Je suis {name}</Text>
            <Image source={emotion ? hungryFace : satisfiedFace}
                   style={{width: "100%", height: 500, resizeMode: "cover"}}/>
            <TouchableOpacity style={stylePage.buttonDesign} onPress={toggleEmotion}>
                <Text style={stylePage.buttonText}>{emotion ? "Nourris-moi humain" : "Je suis rassasié"}</Text>
            </TouchableOpacity>

        </View>
    )
}
const stylePage = StyleSheet.create(
    {
        buttonDesign: {
            backgroundColor: "black",
            padding: 10,
            borderRadius: 5,
            borderWidth: 4,
            borderColor: "black",
            alignItems: "center",
            marginTop: 10,
        },
        buttonText: {
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
        },

    }
)